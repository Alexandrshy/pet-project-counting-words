// @flow

export const NAV_CHANGE = 'NAV_CHANGE';

export function navChange(menu: string) {
  return {
    type: NAV_CHANGE,
    menu,
  };
}
