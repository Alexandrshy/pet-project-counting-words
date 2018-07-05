// @flow

type State = Array<{
    id: string;
    title: string;
    authors: string;
    description: string;
    pageCount: string;
    imageLinks: string;
    inLog: boolean;
}>
type RefAction = { type: string }
type Action = RefAction;

function reducer(state: State = [], action: RefAction): State {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default reducer;