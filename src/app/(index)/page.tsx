// Imports
import type { Metadata } from 'next';

// Components
import Button from '../components/button';
import IconsDisplay from '../components/icons';
import VersionDisplay from '../components/version';

// Manifest
export const metadata: Metadata = {
  title: 'Home ~ Rhet.dev'
}

// Init
function Index(){return(

  <>

    <div className = 'flex-center'>
      <img id = 'profile-icon' src = 'https://cdn.rhet0rical.dev/images/cropped.png' width = {75}></img>
      <p style = {{paddingLeft: 30, fontSize: 30}}>
        Hey there 🙋‍♂️, <br></br> I'm <span className='highlighted'>Rhet0r1cal_</span>
      </p>
    </div>
    
    <IconsDisplay></IconsDisplay>

    <p className = 'text' style = {{width: 650, marginTop: 0}}>
      Nice to meet you! I'm Keegan, a 16 y/o web developer based in the United States. I'm another person who has sold their soul to the world of computers for eternity. <br></br><br></br> I hope you enjoy your stay :D
    </p>

    <div className = 'flex-center' style = {{marginTop: -3}}>

      <Button type = 'text' source = '' padded = {false} url = '/contact'>Contact Me</Button>
      <Button type = 'icon' source = 'images/steam.svg' padded = {true} url = 'https://steamcommunity.com/id/rhet0r1cal_/'>s</Button>
      <Button type = 'icon' source = 'images/replit.svg' padded = {true} url = 'https://replit.com/@Rhet0rical'>s</Button>
      <Button type = 'text' source = '' padded = {true} url = '/about'>About</Button>

    </div>

    <div className = 'flex-center' style = {{marginTop: -15}}>

      <Button type = 'icon' source = 'images/discord.svg' padded = {false} url = 'https://discordapp.com/users/996964730252042320'>s</Button>
      <Button type = 'icon' source = 'images/github.svg' url = 'https://github.com/rhet0r1cal' padded = {true}>s</Button>
      <Button type = 'text' url = 'https://experiments.rhet0rical.dev/' source = '' padded = {true}>Experiments</Button>
      <Button type = 'icon' source = 'images/x.svg' padded = {true} url = 'https://twitter.com/Rhet0r1cal_'>s</Button>

    </div>

    <div style = {{marginTop: -10}}>    
      <VersionDisplay text='get'></VersionDisplay>
    </div>

  </>

)}

// Export
export default Index;