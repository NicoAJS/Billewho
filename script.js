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
    vid = document.getElementById("v0");

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





//andre videoer on scroll
const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			
			video.currentTime = video.duration * percentScrolled;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo("#bound-one", "#bound-one video");

registerVideo("#bound-two", "#bound-two video")

registerVideo("#bound-three", "#bound-three video")

/******* Billedkarrusel *******/
// Variable:
let fotoEt = document.getElementById("fotoEt");
let fotoTo = document.getElementById("fotoTo");
let fotoTre = document.getElementById("fotoTre");
let fotoFire = document.getElementById("fotoFire");
let fotoFem = document.getElementById("fotoFem");

let venstrepil = document.getElementById("venstrepil"); 
let hoejrepil = document.getElementById("højrepil");



// Array

let carousel = [fotoEt, fotoTo, fotoTre, fotoFire, fotoFem];

fotoEt.style.display = "block";
fotoTo.style.display = "none";
fotoTre.style.display = "none";
fotoFire.style.display = "none";
fotoFem.style.display = "none";

// Knapper med billeder af pile
hoejrepil.addEventListener("click", naesteBillede);
venstrepil.addEventListener("click", forrigeBillede);

// Funktioner
function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

// Funktion til at skifte til næste billede
function visnaesteBillede() {
    if (fotoEt.style.order === '1') {
        fotoEt.style.order = '2';
        fotoTo.style.order = '3';
        fotoTre.style.order = '1';
    } else if (fotoTo.style.order === '1') {
        fotoEt.style.order = '1';
        fotoTo.style.order = '2';
        fotoTre.style.order = '3';
    } else {
        fotoEt.style.order = '3';
        fotoTo.style.order = '1';
        fotoTre.style.order = '2';
    }
}

// Funktion til at skifte til forrige billede
function visforrigeBillede() {
    if (fotoEt.style.order === '1') {
        fotoEt.style.order = '3';
        fotoTo.style.order = '1';
        fotoTre.style.order = '2';
    } else if (fotoTo.style.order === '2') {
        fotoEt.style.order = '2';
        fotoTo.style.order = '3';
        fotoTre.style.order = '1';
    } else { (fotoTre.style.order === '3') 
        fotoEt.style.order = '1';
        fotoTo.style.order = '2';
        fotoTre.style.order = '3';
    }
}