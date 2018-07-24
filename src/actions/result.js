// @flow

export const SAVE_RESULT = 'SAVE_RESULT';

export function saveResult(result: Array<{
  id: string;
  title: string;
  authors: string;
  description: string;
  pageCount: string;
  imageLinks: string;
  inLog: boolean;
}>) {
  return {
    type: SAVE_RESULT,
    result,
  };
}
