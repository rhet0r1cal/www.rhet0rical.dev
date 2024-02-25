// Import Components
import Button from './button';

// Component
function Project({title, desc, redirect}: {title: string, desc: string, redirect: string}){return(

    <>

        <div className='project border' style={{padding: 0}}>
            <Button text='Repository' url={redirect} div={false}></Button>
        </div>

    </>

)}

// Export
export default Project;