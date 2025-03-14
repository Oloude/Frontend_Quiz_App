import { useEffect, useState } from "react"
import Quiz from "./components/Quiz"


function App() {
 const [theme, setTheme] = useState(false)

 useEffect(()=>{
  document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light')
 }, [theme])

 function handleThemeToggle(){
  setTheme(prev => !prev)
 }
  return (
    <main className="font-display min-h-screen bg-blue100 bg-no-repeat bg-cover bg-[url(./assets/pattern-background-mobile-light.svg)]  md:bg-[url(./assets/pattern-background-tablet-light.svg)]
     lg:bg-[url(./assets/pattern-background-desktop-light.svg)] dark:bg-slate700 dark:bg-[url(./assets/pattern-background-mobile-dark.svg)]
     dark:md:bg-[url(./assets/pattern-background-tablet-dark.svg)]  dark:lg:bg-[url(./assets/pattern-background-desktop-dark.svg)]">
      <Quiz handleThemeToggle={handleThemeToggle} theme={theme}/>
    </main>
  )
}

export default App