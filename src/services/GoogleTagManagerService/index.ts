// src/services/GoogleTagManagerService.ts

/**
 * Service to handle Google Tag Manager configuration.
 * @class GoogleTagManagerService
 */
export class GoogleTagManagerService {
    private trackingId: string;

    constructor(trackingId: string) {
        this.trackingId = trackingId;
    }

    /**
     * Initializes Google Tag Manager by injecting the gtag script
     * and configuring the tracking ID.
     */
    public init(): void {
        this.injectScript();
        this.setupGtag();
    }

    /**
     * Injects the Google Tag Manager script tag asynchronously.
     * Adds it only if not already present.
     */
    private injectScript(): void {
        if (document.querySelector(`script[src*="${this.trackingId}"]`)) return;

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
        document.head.appendChild(script);
    }

    /**
     * Configures the global gtag function with the tracking ID.
     */
    private setupGtag(): void {
        //@ts-ignore
        window.dataLayer = window?.dataLayer || [];
        function gtag(...args: any[]): void {
            //@ts-ignore
            window.dataLayer.push(args);
        }

        gtag('js', new Date());
        gtag('config', this.trackingId);
    }
}
