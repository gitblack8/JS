const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesPic = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const alt = ['Closeup of a human eye', 'rock pattern', 'flower', 'Egyptian murals', 'butterfly'];

/* Looping through images */
for (let i = 0; i < imagesPic.length; i++) {

  const newImage = document.createElement('img');
  newImage.setAttribute('src', imagesPic[i]);
  newImage.setAttribute('alt', alt[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    const newImgSrc = newImage.getAttribute('src');
    displayedImage.setAttribute('src', newImgSrc);
  })
};

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {

  const btnClass = btn.getAttribute('class');

  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
})