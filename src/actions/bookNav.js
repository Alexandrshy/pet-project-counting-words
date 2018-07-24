// @flow

export const REF_BOOK_NAV = 'REF_BOOK_NAV';
export function refBookNav(navBook: string) {
  return {
    type: REF_BOOK_NAV,
    navBook,
  };
}
