// Imports
import type { Metadata } from 'next';

// Components
import Version from './components/version';

// Metadata
export const metadata: Metadata = {
    title: '404 ~ Rhet0r1cal_'
}

// Init
function ErrorPage(){return(

    <>
    
        <div style = {{textAlign: 'center'}}>
            <p style={{fontSize: 30, marginTop: 10}}><span className = 'special-text'>404</span> - Resource Not Found</p>
            <p style = {{width: 550, marginTop: -20}}>
                The thing you tried to find either got moved, deleted, or just never existed in the first place. From this point, you can check back later or go <a href = 'https://rhet0rical.dev'>home</a>.
            </p>
        </div>
        <Version></Version>

    </>

)}

// Export
export default ErrorPage;