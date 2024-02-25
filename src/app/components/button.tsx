"use client"    // Define Client

// Component
function Button({text, url, div}: {text: string, url: string, div: boolean}){
    
    if (div == true){return(

        <p className="button" style={{marginLeft: 20}} onClick={() => {window.open(url)}}>
            {text}
        </p>

    )} else if (div == false){return(

        <p className="button" onClick={() => {window.open(url)}}>
            {text}
        </p>

    )}

}

export default Button;