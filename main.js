const actualBtn = document.getElementById('actual-btn');
const fileLable = document.getElementById('fileName');
const closeBtn = document.getElementById('close');
const colorBtn = document.querySelectorAll('.theme-buttons');
const umbrellaContainer = document.querySelector('.class1');
const contentContainer = document.querySelector('.combine-btn')
const combineBtn = document.getElementById('combine-btn');
const loaderIcon = document.querySelector('.loader_icon');
const uploadIcon = document.querySelector('.upload-icon');



// Show a random umbrella  and background color by default
function showDefaultUmbrella() {
    const umbrellas = umbrellaContainer.querySelectorAll('.umbrella');
    const randomIndex = Math.floor(Math.random() * umbrellas.length);

    umbrellas.forEach((umbrella) => {
        umbrella.style.display = 'none';
    });

    umbrellas[randomIndex].style.display = 'block';
    let color = umbrellas[randomIndex].getAttribute('data-color');
    const background = document.querySelector('.main');
    background.style.backgroundColor = backgroundColors[color];

    //Upload button color 
    changeUploadButtonColor(color)
    // changeLoderColor(color);
    changeBackgroundColor(color);
    // changeUmbrella(color);

    // Reset the file input field
    actualBtn.value = '';

    fileLable.textContent = "Upload File";
}


// Call the showDefaultUmbrella function on page load
window.onload = showDefaultUmbrella;

// Map of color names to corresponding background colors
const colorMap = {
    yellow: "#f5b514",       // Mustard yellow
    blue: "#128cb5",         // Sky blue
    pink: "#a60d64"          // Dark pink
};

const backgroundColors = {
    yellow: "#f7ee99",       // Mustard yellow
    blue: "#c8eafa",         // Sky blue
    pink: "#fac8d7"          // Dark pink
}


// Change the color of the upload button to match the selected color
function changeUploadButtonColor(color) {
    const uploadBtn = document.getElementById('combine-btn');
    const uploadTxt = document.getElementById('fileName');
    const uploadLogo = document.getElementById('upload-btn');
    uploadBtn.style.backgroundColor = colorMap[color];
    uploadTxt.style.backgroundColor = colorMap[color];
    uploadLogo.style.backgroundColor = colorMap[color];


}

//loder colrs
function changeLoderColor(color) {
    const uploadButtonLoader = document.querySelector('.loader_icon');
    const umbrellaLoader = document.querySelector('.umbrella_loader_icon');

    uploadButtonLoader.style.fill = backgroundColors[color];
    umbrellaLoader.style.fill = colorMap[color];
}
//To change background color 

function changeBackgroundColor(color) {
    const background = document.querySelector('.main');
    background.style.backgroundColor = backgroundColors[color];

}

// change umbrella with loader 
function changeUmbrellaLoder(color) {

    const umbrellas = umbrellaContainer.querySelectorAll('.umbrella');

    umbrellas.forEach((umbrella) => {
        umbrella.style.display = 'none';
    });
    const logocontainer = umbrellaContainer.querySelector('.logo-container');
    logocontainer.style.display = 'none';
    const selectedUmbrella = umbrellaContainer.querySelector(`.umbrella.${color}`);

    selectedUmbrella.style.display = 'none'
    const selectedLoader = umbrellaContainer.querySelector(`.umbrella_loader_icon[data-color="${color}"]`);

    selectedLoader.style.display = 'inline-block';
    selectedLoader.style.animation = 'spin 2s linear infinite';
    // Set the fill color to the desired color
    selectedLoader.style.fill = colorMap[color];

    selectedLoader.style.filter = 'invert(100%)';


    setTimeout(() => {
        umbrellas.forEach((umbrella) => {
            umbrella.style.display = 'none';
        });

        selectedUmbrella.style.display = 'block';
        logocontainer.style.display = 'block';
        selectedLoader.style.display = 'none';

    }, 1000);

}

// Show loader icon and hide upload button
function showLoader() {

    uploadIcon.style.display = 'none';
    loaderIcon.style.display = 'inline-block';
    loaderIcon.style.animation = 'spin 2s linear infinite';

}

// Hide loader icon and show upload button
function hideLoader() {

    const umbrellaImage = umbrellaContainer.querySelector('.umbrella');
    const umbrellaLoader = umbrellaContainer.querySelector('.umbrella_loader_icon');
    const logocontainer = umbrellaContainer.querySelector('.logo-container');

    umbrellaLoader.style.display = 'none';
    umbrellaLoader.style.animation = '';
    umbrellaImage.style.display = 'block';
    logocontainer.style.display = '';


    uploadIcon.style.display = 'flex';
    loaderIcon.style.display = 'none';
    loaderIcon.style.animation = '';

}

function showLoaderUmbrella() {
    const umbrellaImage = umbrellaContainer.querySelector('.umbrella');
    const umbrellaLoader = umbrellaContainer.querySelector('.umbrella_loader_icon');
    const logocontainer = umbrellaContainer.querySelector('.logo-container');
    umbrellaImage.style.display = 'none';
    logocontainer.style.display = 'none';
    umbrellaLoader.style.display = 'inline-block'
    umbrellaLoader.style.animation = 'spin 2s linear infinite';

}

function hideLoaderUmbrella() {
    const umbrellaImage = umbrellaContainer.querySelector('.umbrella');
    const umbrellaLoader = umbrellaContainer.querySelector('.umbrella_loader_icon');
    const logocontainer = umbrellaContainer.querySelector('.logo-container');
    const logoImage = umbrellaContainer.querySelector('.logo-container');
    logoImage.style.display = 'none';

    umbrellaImage.style.display = 'block';
    logocontainer.style.display = 'none';
    umbrellaLoader.style.display = 'none'
    umbrellaLoader.style.animation = '';

}

//^^^^^^^^^ Upload Button ^^^^^^^^^^^^^^\\
actualBtn.addEventListener('change', function () {

    const file = this.files[0];

    if (file) {
        // changeLoderColor(color);

        showLoader();

        // Hide the umbrella image for 5 seconds
        showLoaderUmbrella()

        // const umbrellaImage = umbrellaContainer.querySelector('.umbrella');

        // const umbrellaLoader = umbrellaContainer.querySelector('.umbrella_loader_icon');
        // const logocontainer = umbrellaContainer.querySelector('.logo-container');
        // umbrellaImage.style.display = 'none';
        // logocontainer.style.display = 'none';
        // umbrellaLoader.style.display = 'inline-block'
        // umbrellaLoader.style.animation = 'spin 2s linear infinite';

        setTimeout(() => {

            fileLable.textContent = file.name;

            const show = document.getElementById('close');

            show.style.display = 'inline-block'

        }, 3000)

        // Simulate image processing delay (replace this with your actual processing logic)
        setTimeout(() => {
            // Process the image
            processImage(file);

        }, 2000);

    } else {
        fileLable.textContent = "Upload File";
    }
});

// Process the image


function processImage(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const logoImage = umbrellaContainer.querySelector('.logo-image');
        if (logoImage) {
            logoImage.src = e.target.result;
        } else {
            const newLogoImage = document.createElement('img');
            newLogoImage.setAttribute('alt', 'Company Logo');
            newLogoImage.setAttribute('src', e.target.result);
            newLogoImage.classList.add('logo-image');
            const logoContainer = umbrellaContainer.querySelector('.logo-container');
            logoContainer.appendChild(newLogoImage);
        }
    };

    reader.readAsDataURL(file);
    hideLoader();
}

//^^^^^^^^^ Close Button ^^^^^^^^^^^^^^\\
closeBtn.addEventListener('click', function () {
    showLoaderUmbrella();

    setTimeout(() => {
        hideLoaderUmbrella();
    }, 1000)

    // Reset the file input field
    actualBtn.value = '';

    fileLable.textContent = "Upload File";
    const show = document.getElementById('close');
    show.style.display = 'none';
    const logoImage = umbrellaContainer.querySelector('.logo-container');
    logoImage.style.display = 'none';

});

//^^^^^^^^^ Umbrella image ^^^^^^^^^^^^^^\\

colorBtn.forEach((btn) => {

    btn.addEventListener('click', () => {
        const selectedColor = btn.getAttribute('data-color');

        const umbrellas = umbrellaContainer.querySelectorAll(`.umbrella.${selectedColor}`);

        umbrellas.forEach((umbrella) => {

            umbrella.style.display = 'block';
        });

        const otherUmbrellas = umbrellaContainer.querySelectorAll(`.umbrella:not(.${selectedColor})`);

        otherUmbrellas.forEach((umbrella) => {
            umbrella.style.display = 'none';

        });

        changeUmbrellaLoder(selectedColor);
        changeUploadButtonColor(selectedColor);
        changeBackgroundColor(selectedColor);


    });
}); 