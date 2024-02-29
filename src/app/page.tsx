// Imports
import type { Metadata } from 'next';

// Components
import Button from'./components/button';
import Version from './components/version';

// Metadata
export const metadata: Metadata = {
  title: 'Home ~ rhet.dev'
};

// Init
function Index(){return(

  <>

    {/* Header */}
    <div className = 'flexbox-center' style={{margin: -15}}>
      <img id='profile' src = '/icons/me.png' width={50}></img>
      <p style={{paddingLeft: 30, fontSize: 30}}>
          What's up? <br></br> I'm <span className='special-text'>Rhet0r1cal_</span>
      </p>
    </div>

    <p id='description' className='flexbox-center' style={{paddingBottom: 15}}>
      The walking embodiment of an empty can of tomato soup, with it's lid half open, and a fork sticking out of it. Also just so happens to be a web developer.
    </p>

    {/* Icons */}
    <div id = 'icons' className='flexbox-center' style={{padding: 20}}>
      <img src = '/icons/~.png' style={{padding: 0}}></img>
      <img src = '/icons/react.svg' alt='react'></img>
      <img src = '/icons/html.svg' alt='html'></img>
      <img src = '/icons/css.svg' alt='css'></img>
      <img src = '/icons/js.svg' alt='javascript'></img>
      <img src = '/icons/typescript.svg' alt='typescript'></img>
      <img src = '/icons/python.svg' alt='python'></img>
      <img src = '/icons/~.png'></img>
    </div>

    {/* Links */}
    <div className='flexbox-center'>
      <Button text='/projects' url='https://github.com/rhet0r1cal?tab=repositories' div={false}></Button>
      <Button text='/contact' url='/contact' div={true}></Button>
      <Button text='/about' url='/about' div={true}></Button>
    </div>

    <div className='flexbox-center' style={{marginTop: -15}}>
      <Button text='/github' url='https://github.com/rhet0r1cal' div={false}></Button>
      <Button text='/twitter' url='https://twitter.com/Rhet0r1cal_' div={true}></Button>
      <Button text='/steam' url='https://steamcommunity.com/id/rhet0r1cal_' div={true}></Button>
    </div>

    <Version></Version>

  </>

)}

// Export
export default Index;