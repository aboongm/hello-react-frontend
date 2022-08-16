import Axios from 'axios';

const FETCH_GREETING = 'hello-rails-react/greetings/FETCH_GREETING';

const fetchGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

const initialState = [];

export const fetchGreetingApi = () => async (dispatch) => {
  const returnValue = await Axios.get('http://localhost:3000/api/v1/greetings');
  const greeting = returnValue.data.message;
  dispatch(fetchGreeting(greeting));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
