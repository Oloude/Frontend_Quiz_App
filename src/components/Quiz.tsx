import Empty from "./Empty";
import Header from "./Header";
import Questions from "./Questions";
import Result from "./Result";
import { createContext, useReducer } from "react";

type QuizProps = {
  handleThemeToggle: () => void;
  theme: boolean;
};

type QuizState = {
  quizStart: boolean;
  quizComplete: boolean;
  quizTopic:  null | string;
  currentNumber: number;
  score: number;
  time : number;
  isRunning : boolean;
};

type QuizAction =
  | { type: "START"; name: string }
  | { type: "NEXT QUESTION" }
  | { type: "SUBMIT" }
  | { type: "UPDATE SCORE"; points: number }
  | {type : "RESET"}
  | {type : "UPDATE TIMER" ; remainingTime : number};

const initialState: QuizState = {
  quizStart: false,
  quizComplete: false,
  quizTopic: null,
  currentNumber: 0,
  score: 0,
  time : 60,
  isRunning : false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START":
      return {
        ...state,
        quizStart: true,
        quizTopic: action.name,
      };
    case "NEXT QUESTION":
      return {
        ...state,
        currentNumber: state.currentNumber + 1, 
        time : 60,
        isRunning : false,
      };
    case "SUBMIT":
      return {
        ...state,
        quizComplete: true
        
      };
    case "UPDATE SCORE":
      return {
        ...state,
        score: state.score + action.points, 
      };
    case "UPDATE TIMER":
       return {
        ...state,
        time : action.remainingTime,
        isRunning : true,
       };
      case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const QuizContext = createContext<{ state: QuizState; dispatch: React.Dispatch<QuizAction> }>({
  state: initialState,
  dispatch: () => {},
});

function Quiz({ handleThemeToggle, theme }: QuizProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  console.log(state.quizComplete, state.currentNumber)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      <section>
        <Header handleThemeToggle={handleThemeToggle} theme={theme} />
        {(!state.quizStart && !state.quizComplete)&& <Empty/>}
        {(state.quizStart  && !state.quizComplete) && <Questions />}
        {state.quizComplete && <Result />}
      </section>
    </QuizContext.Provider>
  );
}

export default Quiz;
