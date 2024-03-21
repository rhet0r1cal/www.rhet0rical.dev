// Import
import '../../../public/styles/extra.css';

// Component
export default function Extra({github, bmac}: {github: boolean, bmac: boolean}){

    // Variables
    const bmacURL: string = 'https://www.buymeacoffee.com/rhet0r1cal';
    const githubURL: string = 'https://github.com/rhet0r1cal/www.rhet0rical.dev';

    if (github && bmac) {return(

        <p id = 'extraLabel'><a href = {githubURL}>Visit on GitHub</a> ~ <a href = {bmacURL}>Buy Me a Coffee</a></p>

    )} else if (github) {return(

        <p id = 'extraLabel'><a href = {githubURL}>Visit on GitHub</a></p>

    )} else if (bmac) {return(

        <p id = 'extraLabel'><a href = {bmacURL}>Buy Me a Coffee</a></p>

    )} else {return(
        null
    )}

}