import htmlIcon from '../assets/icon-html.svg'
import cssIcon from '../assets/icon-css.svg'
import jsIcon from '../assets/icon-js.svg'
import accessibilityIcon from '../assets/icon-accessibility.svg'
import { QuizContext } from './Quiz'
import { useContext } from 'react'



function Empty() {
    const quizCtx = useContext(QuizContext)
   function handleStartQuiz(value: string){
     quizCtx.dispatch({type : 'START', name:value})
   }
  return (
    <div className='flex flex-col px-6 pt-8 pb-28 gap-10 md:gap-16 md:px-16 md:pt-18 lg:flex-row lg:gap-33 lg:px-35'>
        <div className='flex flex-col gap-4 md:gap-6 lg:basis-1/2 lg:gap-12'>
        <h1 className='text-[40px] leading-[100%] font-light text-slate700 dark:text-white flex flex-col gap-2 md:text-hLarge'>Welcome to the <span className='font-medium'>Frontend Quiz!</span></h1>
        <p className='text-sm leading-[150%] italic text-slate500 dark:text-blue300 md:text-xl'>Pick a subject to get started.</p>
        </div>

        <div className='flex flex-col gap-3 md:gap-6 lg:basis-1/2'>
            <div onClick={()=>handleStartQuiz("HTML")} className='px-3 py-3 flex gap-4 rounded-xl bg-white dark:bg-slate600 items-center md:gap-8 md:rounded-3xl lg:px-5 lg:py-5'>
                <div className='w-10 h-10 bg-[#fff1e9] rounded-md flex justify-center items-center md:w-14 md:h-14'><img src={htmlIcon} alt="" className='w-7 h-7 md:w-10 md:h-10'/></div> <p className='text-slate700 dark:text-white font-medium text-lg md:text-hSmall'>HTML </p></div>
            <div onClick={()=>handleStartQuiz("CSS")} className='px-3 py-3 flex gap-4 rounded-xl bg-white dark:bg-slate600 items-center md:gap-8 md:rounded-3xl lg:px-5 lg:py-5'>
                <div className='w-10 h-10 bg-[#e0fdef] rounded-md flex justify-center items-center md:w-14 md:h-14'><img src={cssIcon} alt="" className='w-7 h-7 md:w-10 md:h-10'/></div> <p className='text-slate700 dark:text-white font-medium text-lg md:text-hSmall'>CSS </p></div>
            <div onClick={()=>handleStartQuiz("Javascript")} className='px-3 py-3 flex gap-4 rounded-xl bg-white dark:bg-slate600 items-center md:gap-8 md:rounded-3xl lg:px-5 lg:py-5'>
                <div className='w-10 h-10 bg-[#ebf0ff] rounded-md flex justify-center items-center md:w-14 md:h-14'><img src={jsIcon} alt="" className='w-7 h-7 md:w-10 md:h-10'/></div> <p className='text-slate700 dark:text-white font-medium text-lg md:text-hSmall'>JavaScript </p></div>
            <div onClick={()=>handleStartQuiz("Accessibility")} className='px-3 py-3 flex gap-4 rounded-xl bg-white dark:bg-slate600 items-center md:gap-8 md:rounded-3xl lg:px-5 lg:py-5'>
                <div className='w-10 h-10 bg-[#f6e7ff] rounded-md flex justify-center items-center md:w-14 md:h-14'><img src={accessibilityIcon} alt="" className='w-7 h-7 md:w-10 md:h-10'/></div><p className='text-slate700 dark:text-white font-medium text-lg md:text-hSmall'>Accessibility</p></div>
        </div>
    </div>
  )
}   

export default Empty