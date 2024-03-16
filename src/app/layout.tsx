// Imports
import Decal from './components/decal';
import '../../public/styles/_main.css';

// Init
function RootLayout({children}: Readonly<{children: React.ReactNode}>){return(

  <html lang = 'en' className='flex-center'>
    <head>
      <link rel = 'icon' href = 'https://cdn.rhet0rical.dev/images/cropped.png'></link>
    </head>
    <body className = 'dashed-border'>
      {children}
      <Decal size={2000}></Decal>
      <script src = 'https://cdn.rhet0rical.dev/scripts/attribute.js'></script>
    </body>
  </html>

)}

// Export
export default RootLayout;