// actions
const ACTION = "auth/ACTION" as const;
type Action = ReturnType<typeof action>;

// action creators
export const action = (payload: any) => ({
  type: ACTION,
  payload
});

// reducer
type ReducerState = {};
const initialState: ReducerState = {};
function auth(
  state: ReducerState = initialState,
  action: Action
): ReducerState {
  switch (action.type) {
    case ACTION:
      return {};
    default:
      return state;
  }
}

export default auth;
