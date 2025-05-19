import { breakpoints, pxBreakPoints } from "@utils/styling/responsiveNavBar/constants";
import type { IResponsiveNavBar } from "@utils/styling/responsiveNavBar/IResponsiveNavBar";
import type { ResponsiveNavbarConfig } from "@utils/styling/responsiveNavBar/types";


/**
 * Interface for RDNavbar initialization options.
 */
interface RDNavbarOptions {
    anchorNav: boolean;
    stickUpClone: boolean;
    responsive: Record<number, ResponsiveNavbarConfig>;
    callbacks: {
        onStuck: () => void;
        onDropdownOver: () => boolean;
        onUnstuck: () => void;
    };
}

export class ResponsiveNavbar implements IResponsiveNavBar {
    private readonly aliases = breakpoints;
    private readonly breakpoints = pxBreakPoints;
    private rdNavbarElements: NodeListOf<HTMLElement>
    private isNoviBuilder: boolean
    constructor(
        rdNavbarElements: NodeListOf<HTMLElement>,
        isNoviBuilder: boolean
    ) {
        this.rdNavbarElements = rdNavbarElements
        this.isNoviBuilder = isNoviBuilder
    }

    public initialize(): void {
        if (this.rdNavbarElements.length) {
            this.rdNavbarElements.forEach((element) => {
                const responsiveConfig = this.generateResponsiveConfig(element);
                this.initializeRDNavbar(element, responsiveConfig);
                this.applyBodyClass(element);
            });
        }
    }

    private generateResponsiveConfig(element: HTMLElement): Record<number, ResponsiveNavbarConfig> {
        const config: Record<number, ResponsiveNavbarConfig> = {};

        this.breakpoints.forEach((value, index) => {
            const alias = this.aliases[index];
            config[value] = {};

            const getAttr = (suffix: string) => element.getAttribute(`data${alias}${suffix}`);

            const layout = getAttr('layout');
            if (layout) config[value].layout = layout;

            const deviceLayout = getAttr('device-layout');
            if (deviceLayout) config[value].deviceLayout = deviceLayout;

            const hoverOn = getAttr('hover-on');
            if (hoverOn) config[value].focusOnHover = hoverOn === 'true';

            const autoHeight = getAttr('auto-height');
            if (autoHeight) config[value].autoHeight = autoHeight === 'true';

            const stickUp = getAttr('stick-up');
            const isDemoNavbar = element.closest('.layout-navbar-demo');
            config[value].stickUp = this.isNoviBuilder
                ? false
                : stickUp === 'true' && !isDemoNavbar;

            const stickUpOffset = getAttr('stick-up-offset');
            if (stickUpOffset) config[value].stickUpOffset = stickUpOffset;
        });

        return config;
    }

    private initializeRDNavbar(element: HTMLElement, config: Record<number, ResponsiveNavbarConfig>): void {
        const options: RDNavbarOptions = {
            anchorNav: !this.isNoviBuilder,
            stickUpClone:
                element.getAttribute('data-stick-up-clone') === 'true' && !this.isNoviBuilder,
            responsive: config,
            callbacks: {
                onStuck: () => {
                    const searchInput = element.querySelector<HTMLInputElement>('.rd-search input');
                    if (searchInput) {
                        searchInput.value = '';
                        searchInput.dispatchEvent(new Event('propertychange'));
                    }
                },
                onDropdownOver: () => !this.isNoviBuilder,
                onUnstuck: function () {
                    const clone = (this as any).$clone as HTMLElement | null;
                    if (!clone) return;

                    const searchInput = clone.querySelector<HTMLInputElement>('.rd-search input');
                    if (searchInput) {
                        searchInput.value = '';
                        searchInput.dispatchEvent(new Event('propertychange'));
                        searchInput.blur();
                    }
                },
            },
        };

        // @ts-ignore - Assuming external RDNavbar plugin initialization
        (window as any).RDNavbar(element, options);
    }

    private applyBodyClass(element: HTMLElement): void {
        const bodyClass = element.getAttribute('data-body-class');
        if (bodyClass) {
            document.body.classList.add(...bodyClass.split(' '));
        }
    }
}

