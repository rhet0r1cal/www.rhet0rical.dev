"use client"

// Imports
import React from 'react';

// Component
function Version() {
    const [version, setVersion] = React.useState(null);

    // Fetch Version
    React.useEffect(() => {
        fetch('manifest.json')
            .then(response => response.json())
            .then(data => {
                setVersion(data.version);
            })
            .catch(error => {
                console.error('Error fetching version data:', error);
            });
    }, []);

    // Render JSX
    return (
        <p id='version'>
            {version ? (
                <>
                    {version} ~ Made by{' '}
                    <span className="special-text">Rhet0r1cal_</span> with love ❤️
                </>
            ) : (
                'Loading...'
            )}
        </p>
    );
}

// Export
export default Version;