import { QuizContext } from './Quiz'
import { useContext } from 'react'
import questionData from '../data.json'

function Result() {
  let quizCtx = useContext(QuizContext)
  let selectedTopic = quizCtx.state.quizTopic
  let image = questionData.quizzes.find(q => q.title === selectedTopic)?.icon


  function handleReset(){
    quizCtx.dispatch({type : 'RESET'})
  }

  return (
    <div className="px-6 pt-8 flex flex-col gap-10 pb-28 md:px-16 md:pt-18 md:gap-16 lg:flex-row lg:gap-33 lg:px-35">
      <div className='lg:min-w-[465px] lg:w-full'>
      <h1 className="text-slate700 dark:text-white text-[40px] font-light flex flex-col gap-1 md:text-hLarge md:gap-2">Quiz is completed <span className="font-medium">You scored...</span></h1>
      </div>
       
        <div className="flex flex-col gap-3  md:gap-8 lg:min-w-[564px] lg:w-full">
            <div className="px-8 py-8 flex flex-col gap-3 bg-white dark:bg-slate600 rounded-xl items-center md:gap-10 md:px-12 md:py-12 md:rounded-3xl">
               <div className="flex gap-4 items-center md:gap-6">
                <div className="bg-blue100  w-10 h-10 rounded-md flex justify-center items-center md:w-14 md:h-14"> <img src={image} alt="" className="w-7 h-7 md:w-10 md:h-10"/></div>
                <p className="text-lg font-medium text-slate700 dark:text-white md:text-hSmall">{selectedTopic}</p>
               </div>
               <div className="flex flex-col gap-4">
                <p className="text-[88px] text-slate700 dark:text-white text-center font-medium md:text-[144px]">{quizCtx.state.score}</p>
                <p className="text-lg text-slate500 dark:text-blue300 text-center md:text-2xl">out of 10</p>
               </div>
            </div>
            <button onClick={handleReset} className="text-lg text-white font-medium bg-purple300 px-3 py-3 rounded-xl md:px-8 md:py-8 md:rounded-3xl md:text-hSmall ">Play again</button>
        </div>
    </div>
  )
}

export default Result