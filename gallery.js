/* =====================================
   FOREVER SURPRISE - GALLERY
===================================== */

const images = [

"https://i.ibb.co/FkPHwTYT/Snapchat-1633519399.jpg",
"https://i.ibb.co/7JxzssYn/Snapchat-1776907537.jpg",
"https://i.ibb.co/s93rhP5Y/Snapchat-451324420.jpg",
"https://i.ibb.co/SFG8BW3/Snapchat-532652507.jpg",
"https://i.ibb.co/3yvHMLFk/Snapchat-2060452657.jpg",
"https://i.ibb.co/7fkxnGF/Snapchat-437944241.jpg",
"https://i.ibb.co/DPF73cqq/Snapchat-910112214.jpg",
"https://i.ibb.co/B2dtX09D/Snapchat-177217111.jpg"
];

let current = 0;

const img = document.getElementById("galleryImage");
const counter = document.querySelector(".image-count");
const dots = document.querySelectorAll(".dot");

// Show Image
function showImage(){

    img.style.opacity = "0";

    img.style.transform = "scale(.95)";

    setTimeout(()=>{

        img.src = images[current];

        counter.innerHTML = (current+1)+" / "+images.length;

        img.style.opacity = "1";

        img.style.transform = "scale(1)";

        updateDots();

    },250);

}

// Next
function nextImage(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    showImage();

}

// Previous
function previousImage(){

    current--;

    if(current < 0){

        current = images.length-1;

    }

    showImage();

}

// Dots
function updateDots(){

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[current].classList.add("active");

}

// Auto Slide
setInterval(nextImage,4000);

// Continue
function openTimeline(){

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="timeline.html";

    },700);

}

// Swipe Support
let startX = 0;

img.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

img.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextImage();

    }

    if(endX-startX>50){

        previousImage();

    }

});

// Double Tap Heart
let lastTap = 0;

img.addEventListener("click",()=>{

    const now = Date.now();

    if(now-lastTap<300){

        createHeart();

    }

    lastTap = now;

});

// Heart Animation
function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="like-heart";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1200);

}

// Fade In
window.onload=()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".8s";

        document.body.style.opacity="1";

    },100);

};


