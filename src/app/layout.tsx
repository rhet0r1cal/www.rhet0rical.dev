// Imports
import React from 'react';
import '../../public/styles/main.css';

// Init
function RootLayout({children}: {children: React.ReactNode}){return(

  <>
    <html lang="en" className='flexbox-center'>
      <head>
        <link rel="icon" type="image/x-icon" href="/icons/me.png"></link>
      </head>
      <body className='border'>
        {children}
        <img id = 'decal' src = '/planet.svg' width={2000}></img>
        <script src = 'https://cdn.rhet0rical.dev/scripts/attribute.js'></script>
      </body>
    </html>
  </>

)}

// Export
export default RootLayout;