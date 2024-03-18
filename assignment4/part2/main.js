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
    const img = document.createElement('img');
    img.src = `images/${src}`;
    img.alt = alternativeText[index];
    thumbBar.appendChild(img)
});

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);


/* Wiring up the Darken/Lighten button */










