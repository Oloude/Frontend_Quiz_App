import sunLight from '../assets/icon-sun-light.svg'
import sunDark from '../assets/icon-sun-dark.svg'
import moonLight from '../assets/icon-moon-light.svg'
import moonDark from '../assets/icon-moon-dark.svg'
import QuestionData from '../data.json'
import { useContext } from 'react'
import { QuizContext } from './Quiz'

type HeaderProps = {
    handleThemeToggle : ()=> void,
    theme : boolean
 }


function Header({handleThemeToggle, theme} : HeaderProps) {
  const quizCtx = useContext(QuizContext)
  let selectedTopic = quizCtx.state.quizTopic
  let image = QuestionData.quizzes.find(q => q.title === selectedTopic)?.icon
  return (
    <header className='flex justify-between px-6 py-4 md:px-16 md:py-8 lg:px-35'>
       {quizCtx.state.quizStart && <div className='flex gap-3 items-center md:gap-6'>
                <div className={`${ selectedTopic === 'HTML' ? 'bg-[#fff1e9]' : 
                  selectedTopic === "CSS" ? 'bg-[#e0fdef] ' : 
                  selectedTopic === "Javascript" ? 'bg-[#ebf0ff]' : 
                  'bg-[#f6e7ff]'
                } w-10 h-10  rounded-md flex justify-center items-center md:w-14 md:h-14'`}><img src={image} alt="" className='w-7 h-7 md:w-10 md:h-10'/></div>
                 <p className='text-slate700 dark:text-white font-medium text-lg capitalize md:text-hSmall'>{selectedTopic} </p></div>
        }
        <div className='ml-auto flex gap-2 md:gap-4'>
            <img src={theme  ? sunLight : sunDark} alt="" className='w-4 h-4 md:w-6 md:h-6'/>
            <button onClick={handleThemeToggle} className={`${theme ? 'justify-end' : 'justify-start'} flex p-1 w-8 h-5 bg-purple300 rounded-full md:h-7 md:w-12`}>
                <div className='bg-white w-3 h-3 rounded-full md:h-5 md:w-5'></div>
                </button>
            <img src={theme  ? moonLight : moonDark} alt="" className='w-4 h-4 md:w-6 md:h-6' />
        </div>
    </header>
  )
}

export default Header