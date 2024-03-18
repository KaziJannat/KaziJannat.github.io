const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Declaring the array of image filenames */
const filenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const alternativeText = ['Closeup of a human eye', 'Closeup of a natural rock', 'Closeup of a flower', 'Closeup of a flower', 'Closeup of a batarflay']

/* Looping through images */
filenames.forEach((src, index) => {
    const newImage = document.createElement('img');
    newImage.src = `images/${src}`;
    newImage.alt = alternativeText[index];

    newImage.addEventListener('click', displayFullImage)
    thumbBar.appendChild(newImage)
});

function displayFullImage(e) {
    const element = e.target;
    displayedImage.src = element.src;
    displayFullImage.alt = element.alt
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeOverlay);

function changeOverlay() {
    const currentStatus = btn.getAttribute('class')
    if (currentStatus === 'dark') {
        btn.setAttribute('class', 'light')
        btn.innerHTML = 'Lighten'
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    }
    if (currentStatus === 'light') {
        btn.setAttribute('class', 'dark')
        btn.innerHTML = 'Darken'
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'
    }
}









