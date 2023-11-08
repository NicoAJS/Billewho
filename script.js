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