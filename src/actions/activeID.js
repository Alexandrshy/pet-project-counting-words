// @flow
export const REF_ACTIVE_TEXT_ID = 'REF_ACTIVE_TEXT_ID';
export function refActiveTextID(activeID: string) {
  return {
    type: REF_ACTIVE_TEXT_ID,
    activeID,
  };
}
