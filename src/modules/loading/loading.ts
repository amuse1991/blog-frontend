// actions
const START_LOADING = "loading/START_LOADING" as const;
const FINISH_LOADING = "loading/FINISH_LOADING" as const;
type LoginAction =
  | ReturnType<typeof startLoading>
  | ReturnType<typeof finishLoading>;
type Payload = {
  requestType: string;
};

// action creators
export const startLoading = (payload: Payload) => ({
  type: START_LOADING,
  payload
});

export const finishLoading = (payload: Payload) => ({
  type: FINISH_LOADING,
  payload
});

// reducer
type LoadingState = {};
const initialState: LoadingState = {};
function loading(
  state: LoadingState = initialState,
  action: LoginAction
): LoadingState {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload.requestType]: true
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload.requestType]: false
      };
    default:
      return state;
  }
}

export default loading;
