// Fetch Objects
const versionLabel = document.getElementById('version');
const githubButton = document.getElementById('github');
const twitterButton = document.getElementById('twitter');
const monkeytypeButton = document.getElementById('monkeytype');
const projectsButton = document.getElementById('projects');
const contactButton = document.getElementById('contact');
const aboutmeButton = document.getElementById('about-me');

// URL Tree
const redirect_urls = {
    github: 'https://github.com/rhet0r1cal',
    twitter: 'https://twitter.com/Rhet0r1cal_',
    monkeytype: 'https://monkeytype.com/profile/Rhet0r1cal_',
    projects: 'https://rhet0rical.dev/pages/403.html',
    contact: 'mailto:me@rhet0rical.dev',
    aboutme: 'https://rhet0rical.dev/about'
}

// Startup Events
document.addEventListener('DOMContentLoaded', function(){

    // Render Manifest
    fetch('core/manifest.json')
    .then(response => response.json())
    .then(data => {
        if(!data.allow_access){
            this.location.href = '/403';
        }
        versionLabel.innerHTML = `<i>v${data.version}-${data.last_update}</i> ~ Made by <span class = 'special-text'>Rhet0r1cal_</span> with love 💘`
    });

})

// Button Events
githubButton.addEventListener('click', function(){window.open(redirect_urls.github)});
twitterButton.addEventListener('click', function(){window.open(redirect_urls.twitter)});
monkeytypeButton.addEventListener('click', function(){window.open(redirect_urls.monkeytype)});
projectsButton.addEventListener('click', function(){window.open(redirect_urls.projects)});
contactButton.addEventListener('click', function(){window.open(redirect_urls.contact)});
aboutmeButton.addEventListener('click', function(){window.open(redirect_urls.aboutme)});