/*==========================
LOADING SCREEN
==========================*/
window.addEventListener("load",()=>{
const loader=document.getElementById("loadingScreen");
setTimeout(()=>{
loader.style.opacity="0";
setTimeout(()=>loader.style.display="none",800);
},2000);
});

/*==========================
SMOOTH SCROLL
==========================*/
const beginButton=document.getElementById("beginButton");
beginButton.addEventListener("click",()=>{
document.getElementById("story").scrollIntoView({
behavior:"smooth"
});
});

/*==========================
SCROLL ANIMATION
==========================*/
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:.2
});

document.querySelectorAll(".fade").forEach(section=>{
observer.observe(section);
});

/*==========================
MUSIC
==========================*/
const music=document.getElementById("bgMusic");
const musicButton=document.getElementById("musicButton");

const playlist=[
"assets/music/SpotiDownloader.com - Kalapastangan - fitterkarma.mp3",
"assets/music/SpotiDownloader.com - Misteryoso - Cup of Joe.mp3",
"assets/music/SpotiDownloader.com - Paraluman - Adie.mp3",
"assets/music/SpotiDownloader.com - You'll Be in My Heart - NIKI.mp3",
"assets/music/SpotiDownloader.com - I Thought I Saw Your Face Today - She & Him.mp3",
"assets/music/SpotiDownloader.com - I Think They Call This Love - Cover - Matthew Ifield.mp3",
"assets/music/SpotiDownloader.com - I Love You Will Still Sound The Same - Oh Honey.mp3",
"assets/music/SpotiDownloader.com - Always Looking for You - Jason Mraz.mp3"
];

let currentSong=0;
let playing=false;

function loadSong(index){
music.src=playlist[index];
}

loadSong(0);

music.addEventListener("ended",()=>{
currentSong=(currentSong+1)%playlist.length;
loadSong(currentSong);
music.play();
});

musicButton.addEventListener("click",()=>{

if(!playing){
music.play();
musicButton.innerHTML='<i class="fa-solid fa-volume-high"></i>';
playing=true;
}else{
music.pause();
musicButton.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';
playing=false;
}

});

/*==========================
LOVE COUNTER
==========================*/

const anniversary=new Date("2025-08-03T00:00:00");

function updateCounter(){

const now=new Date();

const diff=now-anniversary;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(diff/(1000*60*60));

const minutes=Math.floor(diff/(1000*60));

document.getElementById("days").textContent=days;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;

}

updateCounter();

setInterval(updateCounter,60000);

/*==========================
LOVE TEXTS
==========================*/

const loveMessages=[

"Your smile.",
"The way you laugh.",
"How safe I feel around you.",
"Your beautiful eyes.",
"Your kindness.",
"The little things you do.",
"Your hugs.",
"The way you understand me.",
"Every date we've shared.",
"Your sleepy voice.",
"The way you say my name.",
"The way you care.",
"The memories we've made.",
"How patient you are.",
"The future we'll build together."

];

const emojis=[

"❤️",
"🥰",
"🌹",
"💖",
"✨",
"🦋",
"🌸",
"☕",
"🌙",
"💍",
"😊",
"💗",
"😘",
"💕"

];

let loveIndex=0;
document.getElementById("nextLove").addEventListener("click",()=>{
    loveIndex++;
    if(loveIndex>=loveMessages.length){
        loveIndex=0;
        }
        document.getElementById("loveText").textContent=loveMessages[loveIndex];
        document.getElementById("loveEmoji").textContent=emojis[Math.floor(Math.random()*emojis.length)];
        });

/*==========================
BUTTON EFFECT
==========================*/
    document.querySelectorAll(".answer").forEach(button=>{
    button.addEventListener("click",()=>{
    button.innerHTML='< class="fa-solid fa-heart"> Always <i class="fa-solid fa-heart"></i>';
    createHeartBurst();
    });
});

/*==========================
FLOATING HEARTS
==========================*/
function createHeart(){
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML='<i class="fa-solid fa-heart"></i>';
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(18+Math.random()*24)+"px";
heart.style.animationDuration=(4+Math.random()*4)+"s";
heart.style.setProperty("--drift",(Math.random()*200-100)+"px");
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),8000);
}

function createHeartBurst(){
for(let i=0;i<25;i++){
setTimeout(createHeart,i*70);
}
}

/*==========================
STARS
==========================*/
const stars=document.getElementById("stars");

function createStars(){

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";
star.style.animationDuration=(1+Math.random()*4)+"s";
star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}

}

createStars();

/*==========================
SHOOTING STARS
==========================*/
function shootingStar(){

const star=document.createElement("div");

star.className="shootingStar";

star.style.left=(-200)+"px";
star.style.top=Math.random()*250+"px";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},2200);

}

setInterval(shootingStar,12000);

/*==========================
BUTTERFLIES
==========================*/
const butterflyLayer=document.getElementById("butterflies");

function butterfly(){

const b=document.createElement("div");

b.className="butterfly";

b.innerHTML="🦋";

b.style.left="-50px";

b.style.top=(Math.random()*window.innerHeight)+"px";

b.style.fontSize=(22+Math.random()*20)+"px";

b.style.animationDuration=(12+Math.random()*8)+"s";

butterflyLayer.appendChild(b);

setTimeout(()=>{
b.remove();
},22000);

}

setInterval(butterfly,9000);

/*==========================
PARTICLES
==========================*/
const particleLayer=document.getElementById("particles");

function particle(){

const p=document.createElement("div");

p.className="particle";

const size=Math.random()*4+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(8+Math.random()*8)+"s";

particleLayer.appendChild(p);

setTimeout(()=>{
p.remove();
},17000);

}

setInterval(particle,350);

/*==========================
MOON EASTER EGG
==========================*/
const moonModal=document.getElementById("moonModal");
const closeMoonModal=document.getElementById("closeMoonModal");

moon.addEventListener("click",()=>{

createHeartBurst();

moonModal.classList.add("show");

});

closeMoonModal.addEventListener("click",()=>{

moonModal.classList.remove("show");

});

moonModal.addEventListener("click",(e)=>{

if(e.target===moonModal){

moonModal.classList.remove("show");

}

});

/*==========================
HERO PARALLAX
==========================*/
window.addEventListener("scroll",()=>{

const hero=document.getElementById("heroVideo");

const y=window.scrollY;

hero.style.transform=`scale(1.08) translateY(${y*0.15}px)`;

});

/*==========================
RANDOM HEARTS
==========================*/
setInterval(()=>{

if(Math.random()<0.45){

createHeart();

}

},1800);

/*==========================
ANSWER BUTTONS
==========================*/
document.querySelectorAll(".answer").forEach(button=>{

button.addEventListener("click",()=>{

createHeartBurst();


button.innerHTML='<i class="fa-solid fa-heart"> Forever <i class="fa-solid fa-heart"></i>';

});

});

/*==========================
KEYBOARD SHORTCUT
==========================*/
document.addEventListener("keydown",(e)=>{

if(e.key.toLowerCase()==="l"){

createHeartBurst();

}

});

/*==========================
AUTO PLAY MUSIC AFTER FIRST CLICK
==========================*/
document.addEventListener("click",()=>{

if(!playing){

music.play().catch(()=>{});

playing=true;

musicButton.innerHTML='<i class="fa-solid fa-volume-high"></i>';

}

},{once:true});

/*==========================
ENDING FADE
==========================*/
const ending=document.getElementById("ending");

const endObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

createHeartBurst();

}

});

},{threshold:.6});

endObserver.observe(ending);