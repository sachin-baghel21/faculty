var move = document.getElementById('profile-pop');
const icon = document.getElementById('icon');

icon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the document
    move.classList.add('hide');

    // Adding a click event listener to the document to show the 'profile-pop' element again
    document.addEventListener('click', () => {
        move.classList.remove('hide');
    });
});


// page scroll code here

// function scroll() {
// window.scrollTo({ top: 0, behavior: "smooth" });
// 
// }
// 
// var btn = document.querySelector(".scrollpage");
// btn.style.cssText = "display:none";
// btn.addEventListener('click', scroll);
// 
// window.addEventListener('scroll', function () {
// 
// if (window.pageYOffset > 600) {
// 
// btn.style.display = "block";
// 
// }
// 
// else if (window.pageYOffset < 300) {
// 
// btn.style.display = "none";
// 
// }
// 
// });
// side-bar links


var reg = document.querySelector('.Registration-link');
var Reg_links = document.querySelector('.reg-links');
reg.addEventListener('click', () => {
    Reg_links.classList.toggle("reg-active");
})
var main = document.querySelector('.Main-link');
var Main_links = document.querySelector('.main-links');
main.addEventListener('click', () => {
    Main_links.classList.toggle('main-active');
})
var fac = document.querySelector('.Faculty-link');
var fac_links = document.querySelector('.fac-links');

fac.addEventListener('click', () => {
    fac_links.classList.toggle('fac-active');
})

var fee = document.querySelector('.Fee-link');
var fee_links = document.querySelector('.fee-links');

fee.addEventListener('click', () => {
    fee_links.classList.toggle('fee-active');
})
var result = document.querySelector('.Result-link');
var res_links = document.querySelector('.res-links');

result.addEventListener('click', () => {
    res_links.classList.toggle('res-active');
})

// Aside links code here

var AsideLink = document.querySelector('#aside-link');
var inside = document.querySelector('#cross-icon');
var aside = document.querySelector('.aside-bar');

AsideLink.addEventListener('click', () => {
    aside.classList.add('aside-active');
});

inside.addEventListener('click', () => {
    aside.classList.remove('aside-active');
});

// profile update code here
// var img = document.getElementById('user-img');
// var img = document.getElementById('user-img1');
// var profileLink = document.getElementById('profile-link');
// 
// profileLink.onchange = ()=> {
// img.src = URL.createObjectURL(profileLink.files[0]);
// img.src = URL.createObjectURL(profileLink.files[1]);
// }

var img1 = document.getElementById('user-img');
var img2 = document.getElementById('user-img1');
var profileLink = document.getElementById('profile-link');

profileLink.addEventListener('change', () => {
    if (profileLink.files.length > 0) {
        var imageUrl = URL.createObjectURL(profileLink.files[0]);
        img1.src = imageUrl;
        img2.src = imageUrl;
    }
});

// This is crausole bar code 
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentItem = 0;

    function showNextSlide() {
        if (currentItem < totalItems - 1) {
            currentItem++;
        } else {
            currentItem = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const transformValue = -currentItem * 100 + '%';
        carousel.style.transform = `translateX(${transformValue})`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});

// counter increase 
// JavaScript to animate the counter
const counterElement = document.getElementById('counter');
let count = 0;
const targetCount = 100; // Change this to your desired target count
const animationDuration = 2000; // Change this to adjust the animation duration in milliseconds
const increment = targetCount / animationDuration;

function animateCounter() {
    const intervalId = setInterval(() => {
        count += increment;
        counterElement.textContent = Math.round(count);
        if (count >= targetCount) {
            clearInterval(intervalId);
        }
    }, 1);
}

// Trigger the animation when the page loads
window.addEventListener('load', animateCounter);

// counter part here 
const studentCounter = document.getElementById('studentCounter');
const facultyCounter = document.getElementById('facultyCounter');
const placementCounter = document.getElementById('placementCounter');

let studentCount = 0;
let facultyCount = 0;
let placementCount = 0;

function updateCounters() {
    studentCounter.textContent = studentCount + 'K';
    facultyCounter.textContent = facultyCount + 'K';
    placementCounter.textContent = placementCount + '%';
}

function animateCounters() {
    studentCounter.style.transform = 'scale(1.2)';
    facultyCounter.style.transform = 'scale(1.2)';
    placementCounter.style.transform = 'scale(1.2)';

    setTimeout(() => {
        studentCounter.style.transform = 'scale(1)';
        facultyCounter.style.transform = 'scale(1)';
        placementCounter.style.transform = 'scale(1)';
    }, 500);
}

function incrementCounters() {
    studentCount++;
    facultyCount++;
    placementCount++;
    updateCounters();
    animateCounters();

    // Comment out this part to stop counters at 100
    if (studentCount >= 90) {
        clearInterval(intervalId);
    }
    if (facultyCount >= 92)
        clearInterval(intervalId);
}
if (placementCount >= 100) {
    clearInterval(intervalId);
}


const intervalId = setInterval(incrementCounters, 20);