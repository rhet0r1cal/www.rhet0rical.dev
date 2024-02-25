// Imports
import type { Metadata } from 'next';

// Components
import Version from '../../components/version';

// Metadata
export const metadata: Metadata = {
    title: 'Contact ~ rhet.dev'
}

// Init
function Index(){return(

    <>
        
        <div style={{textAlign: 'center'}}>
            <p className='special-text' style={{fontSize: 30}}>Hey <i>Hot Stuff</i>, Wanna Talk?</p>
            <p style={{width: 600, marginTop: -15}}>
                Looking to hire me? I wish. Anyways, you can contact me using any methods below. I'll usually respond for any reason, even if it's a really funny joke and I just wanna respond and tell you that it's funny. I'm usually available around 3:00 and 9:00 Eastern Standard Time.
            </p>
            <p className='special-text'>Email: me@rhet0rical.dev</p>
            <Version></Version>
        </div>
    </>

)}

// Export
export default Index;