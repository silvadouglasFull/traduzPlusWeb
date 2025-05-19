/**
 * DefinePlugins.ts
 * @description Concrete implementation for defining and retrieving DOM plugins.
 */

import type { IDefinePlugins } from "@core/definePlugins/IDefinePlugins";
import type { Plugins } from "@core/definePlugins/types";

/**
 * Service responsible for detecting DOM plugins based on selectors.
 */
export class DefinePlugins implements IDefinePlugins {
    public getPlugins(): Plugins | null {
        try {
            return {
                bootstrapTooltip: document.querySelectorAll("[data-toggle='tooltip']"),
                bootstrapModalDialog: document.querySelectorAll(".modal"),
                bootstrapTabs: document.querySelectorAll(".tabs-custom"),
                rdNavbar: document.querySelectorAll(".rd-navbar"),
                materialParallax: document.querySelectorAll(".parallax-container"),
                rdGoogleMaps: document.querySelectorAll(".rd-google-map"),
                rdMailForm: document.querySelectorAll(".rd-mailform"),
                rdInputLabel: document.querySelectorAll(".form-label"),
                regula: document.querySelectorAll("[data-constraints]"),
                wow: document.querySelectorAll(".wow"),
                owl: document.querySelectorAll(".owl-carousel"),
                swiper: document.querySelectorAll(".swiper-slider"),
                search: document.querySelectorAll(".rd-search"),
                searchResults: document.querySelectorAll(".rd-search-results"),
                statefulButton: document.querySelectorAll(".btn-stateful"),
                isotope: document.querySelectorAll(".isotope"),
                popover: document.querySelectorAll('[data-toggle="popover"]'),
                viewAnimate: document.querySelectorAll('.view-animate'),
                radio: document.querySelectorAll("input[type='radio']"),
                checkbox: document.querySelectorAll("input[type='checkbox']"),
                customToggle: document.querySelectorAll("[data-custom-toggle]"),
                counter: document.querySelectorAll(".counter"),
                preloader: document.querySelectorAll(".preloader"),
                captcha: document.querySelectorAll(".recaptcha"),
                lightGallery: document.querySelectorAll("[data-lightgallery='group']"),
                lightGalleryItem: document.querySelectorAll("[data-lightgallery='item']"),
                lightDynamicGalleryItem: document.querySelectorAll("[data-lightgallery='dynamic']"),
                mailchimp: document.querySelectorAll(".mailchimp-mailform"),
                campaignMonitor: document.querySelectorAll(".campaign-mailform"),
                copyrightYear: document.querySelectorAll(".copyright-year"),
                buttonWinona: document.querySelectorAll(".button-winona"),
                slick: document.querySelectorAll(".slick-slider"),
                videoOverlay: document.querySelectorAll(".video-overlay"),
                d3Charts: document.querySelectorAll(".d3-chart"),
                selectFilter: document.querySelectorAll(".select"),
                maps: document.querySelectorAll(".google-map-container"),
                hoverdir: document.querySelectorAll(".hoverdir .hoverdir-item"),
                vide: document.querySelectorAll(".vide_bg"),
                progressLinear: document.querySelectorAll(".progress-linear"),
                countdown: document.querySelectorAll(".countdown"),
                lazyComponent: document.querySelector('.lazy-component')
            };
        } catch (error) {
            console.error("Plugin detection failed:", error);
            return null;
        }
    }
}
