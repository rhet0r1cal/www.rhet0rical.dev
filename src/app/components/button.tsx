"use client"

// Import Stylesheet
import '../../../public/styles/button.css'

// Component
export default function Button({children, url, type, source, padded}: {children: React.ReactNode, url: string, type: string, source: string, padded: boolean}){

    if (type == 'text' && padded) {return(
        <p className = 'button' onClick={() => {window.open(url)}} style = {{marginLeft: 15}}>
            {children}
        </p>
    )} else if (type == 'icon' && padded) {return(
        <img className = 'alt-button' src = {source} onClick={() => {window.open(url)}} style = {{marginLeft: 15, height: 21}}></img>
    )} else if (type == 'text' && !padded){return(
        <p className = 'button' onClick={() => {window.open(url)}}>
            {children}
        </p>
    )} else if (type == 'icon' && !padded){return(
        <img className = 'alt-button' src = {source} onClick={() => {window.open(url)}} style={{height: 21}}></img>
    )}

}