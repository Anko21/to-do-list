import introPic from '../assets/introPic.png'
import {QuoteIntroProps} from './Interfaces'

const QuoteIntro = (props:QuoteIntroProps) => {

  return (
    <div className='main'>
        <div className='main--start'>
            <p className='quote'>"&nbsp;If you don't design your own life plan, chances are you'll 
            fall into someone else's plan. <br/>And guess what they have planned
            for you? <br/>Not much!&nbsp;"
            </p>
              <button type='button' className='button' onClick={props.handleClick}> Create your list</button>
        </div>
        <div className='intro-pic'>
          <img src={introPic} alt='to do list picture'/>
        </div>
    </div>
  )
}

export default QuoteIntro;
