// Imports
import type { Metadata } from 'next';

// Components
import VersionDisplay from '../../components/version';

// Metadata
export const metadata: Metadata = {
    title: 'Contact ~ Rhet.dev'
}

// Init
function Index(){return(

    <>

        <div style = {{textAlign: 'center'}}>
            <p className = 'highlighted' style = {{fontSize: 30}}>Hey, Wanna Talk? 🤙</p>
            <p style = {{width: 650, marginTop: -10}}>
                Looking to hire me? <br></br><br></br> You can contact me using any methods below. I'll usually respond for any reason, even if it's a really funny joke and I just wanna respond and tell you that it's funny. I'm usually available around 3:00 and 9:00 Eastern Standard Time.
            </p>
            <p className = 'highlighted'>Email: me@rhet0rical.dev</p>
            <VersionDisplay text = 'get'></VersionDisplay>
        </div>

    </>

)}

// Export
export default Index;