import { useEffect, useContext } from "react"
import { QuizContext } from "./Quiz"


function Timer() {
    const quizCtx = useContext(QuizContext)

    useEffect(()=>{
        if(quizCtx.state.time <= 0){
            quizCtx.dispatch({type : 'NEXT QUESTION'})
            quizCtx.dispatch({type: 'UPDATE SCORE', points : 0})
        }
        const updateTimer = setInterval(()=>{
            quizCtx.dispatch({type : 'UPDATE TIMER', remainingTime : quizCtx.state.time - 1})
        }, 1000)


        return ()=> clearInterval(updateTimer)
    },
[quizCtx.state.time])

let width = quizCtx.state.time / 60 * 100

  return (
    <div className="w-full h-4 rounded-full bg-white dark:bg-slate700 p-1">
        <div className="h-2 bg-purple300 rounded-full" style={{width: `${width}%`}}></div>
    </div>
  )
}

export default Timer