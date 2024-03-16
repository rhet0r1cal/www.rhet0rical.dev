// Import Stylesheet
import '../../../public/styles/version.css';

// Component
export default function VersionDisplay({text}: {text: string}){

    // Version Constant
    const version = '8.0.0'

    // Script
    if (text == 'get'){return(

        <p id = 'version'>v{version} ~ Made by <span className='highlighted'>Rhet0r1cal</span> With Love 💝</p>

    )} else {

        <p id = 'version'>v{text} ~ Made by <span className='highlighted'>Rhet0r1cal</span> With Love 💝</p>

    }

}