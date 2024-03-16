// Imports
import type { Metadata } from 'next';

// Components
import VersionDisplay from '../../components/version';

// Metadata
export const metadata: Metadata = {
    title: 'About ~ Rhet.dev'
}

// Init
function Index(){return(

    <>

        <div style = {{flexDirection: 'column', width: 600}}>
            <p className = 'highlighted' style = {{fontSize: 30, textAlign: 'center'}}>"Woah, this site looks cool!"</p>
            <p style = {{marginTop: -25, marginLeft: 300, fontStyle: 'italic'}}>- You, hopefully :D</p>

            <p style = {{textAlign: 'center'}}>
                I'm <b>Keegan</b>, but you know me as Rhet0r1cal_. I'm 16 years of age, and have sold my soul to the world of computers never to return. I've been using computers for about 7 years, and have been coding stuff since early 2017. My main skill is <span className = 'highlighted'>web development</span>, and i've been focusing on that since early 2020. <br></br><br></br> Starting on platforms such as Scratch, I made around 50+ things <i>(thank god they're gone)</i>, before simply deciding that letters and numbers could do so much more then blocks and legos. Ever since that point, i've been using my keyboard as if it were a sport, have somehow accumulated a WPM of 100+, and have even starting building computers. <br></br><br></br> I look forward to working with you. 😁
            </p>
            <VersionDisplay text = 'get'></VersionDisplay>

        </div>

    </>

)}

// Export
export default Index;