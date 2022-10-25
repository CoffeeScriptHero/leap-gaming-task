export interface ApplicationInterface {
    isDesktop: boolean;
    slotWidth: number;
    slotHeight: number;
}

export const appConfig: ApplicationInterface = {
    isDesktop: window.innerWidth >= 1600,
    slotWidth: window.innerWidth >= 1600 ? 1200 : 1100,
    slotHeight: window.innerHeight >= 800 ? 800 : 800,
};
