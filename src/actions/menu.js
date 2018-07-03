export const NAV_CHANGE = 'NAV_CHANGE';

export function navChange(menu) {
    return {
        type: NAV_CHANGE,
        menu
    }
}