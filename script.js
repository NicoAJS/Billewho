const logo = document.getElementById("logo");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a"); /*dette er et array - alle med classnamet nav-links indsættes */


console.log("4");
logo.addEventListener("click", () => { /* lytter efter hvornår der clickes og starter funktionen derefter */
console.log("6");    
nav.classList.toggle("nav-active"); 
console.log(navLinks.length);    
    navLinks.forEach((link, index) => {  /* gennemløb af alle elementer med class'en nav-links */ 
    
    if (link.style.animation) {
        link.style.animation = ""; /* slukker animation */
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.5 }s `;
    } /* starter animation med tidsforskudning fra top mod bund (hvorfor linksene gradvist fremkommer) */
    });
    logo.classList.toggle("toggle"); /* well... toggler burgeren ;) så starter forfra */
});





let rumlist = document.getElementById("rumlist");
rumlist.style.display = "none";

function openDropdown(){
    if (rumlist.style.display != "none"){
        rumlist.style.display = "none"
    } else {
        rumlist.style.display = "block";
    }
}


console.log('set height');
var setHeight = document.getElementById("set-height");
console.log(setHeight);
var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 900,
    // get page height from video duration
    
    // select video element         
    vid = document.getElementById('v0');

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function () {
    getmetadata();
});

if (vid.readyState >= 2) {
    getmetadata();
}

function getmetadata() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
}

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
    //console.log(vid.currentTime);
}

window.requestAnimationFrame(scrollPlay);

//divskiftningstest


  
  


