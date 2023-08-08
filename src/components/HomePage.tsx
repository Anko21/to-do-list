import { useState } from 'react'
import QuoteIntro from './QuoteIntro';
import MainPage from './MainPage';

const HomePage = () => {
const [isClicked,setIsClicked]=useState(false)

const handleClick=()=>
setIsClicked(prevState=>!prevState)

  return (
    <div >
      {isClicked===false?
      <QuoteIntro handleClick={handleClick}/>:
      <div>
      <MainPage/>
      </div>
      }
    </div>
  )
}

export default HomePage