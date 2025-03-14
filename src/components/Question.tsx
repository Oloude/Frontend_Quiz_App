 import correctIcon from '../assets/icon-correct.svg'
 import incorrectIcon from '../assets/icon-incorrect.svg'
 
 type QuestionProps ={
  option : string,
  letter : string,
  onClick : (value: string) => void,
  userAnswer : string,
  answer : string | undefined
 }

function Question({option, letter, onClick, userAnswer, answer} : QuestionProps) {

  return (
    <button onClick={()=>onClick(option)} disabled={Boolean(userAnswer)}
     className={`
      ${userAnswer === answer && option === userAnswer ? 'border-green border-2' : ''} 
    ${userAnswer && option === userAnswer && userAnswer !== answer ? 'border-red border-2' : ''} 
    bg-white dark:bg-slate600 px-3 py-3 flex justify-between items-center rounded-xl hover:border-2 hover:border-purple300 group md:rounded-3xl`}>
      <div className='flex gap-3 items-center md:gap-8'>
        <div className={` 
            ${userAnswer === answer && option === userAnswer ? 'bg-green text-white' : ''} 
            ${userAnswer && option === userAnswer && userAnswer !== answer ? 'bg-red text-white' : ''} 
        
        bg-blue100 w-10 h-10 flex justify-center items-center text-slate600 rounded-md text-lg font-medium flex-shrink-1  group-hover:text-white group-hover:bg-purple300 md:w-14 md:h-14 md:text-hSmall`}>{letter}</div>
        <p className="text-slate600  dark:text-white text-lg font-medium md:text-hSmall">{option}</p>
        </div>
        <div className='flex-shrink-1 '>
            {userAnswer && (
                <>
                  {option === userAnswer && (
                    <img src={userAnswer === answer ? correctIcon : incorrectIcon} alt="" className='w-8 h-8'/>
                  )}
                  {option === answer && userAnswer !== answer && (
                    <img src={correctIcon} alt="" className='w-8 h-8'/>
                  )}
                </>
              )}
         </div>

    </button>
  )
}

export default Question