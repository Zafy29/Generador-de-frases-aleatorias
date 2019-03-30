import { NUEVA_FRASE } from "./actions";
import quotes from "./initialState";

const num = Math.floor(Math.random() * quotes.length);

const appReducer = (state = [...quotes], action) => {
  switch (action.type) {
    default:
      return state[num];

    case NUEVA_FRASE: {
      const newRandomNum = Math.floor(Math.random() * quotes.length);
      const newQuote = [...quotes];
      return newQuote[newRandomNum];
    }
  }
};

export default appReducer;
