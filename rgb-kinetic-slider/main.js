// Import the RGB Kinetic Slider library
// import rgbKineticSlider from './rgbKineticSlider.js';

// Your slide images
const images = [
    "./blog-banner-1.webp",
    "./blog-banner-2.webp",
    "./blog-banner-4.webp",
    "./blog-banner-5.webp",
];

// Your slide texts (title and subtitle)
const texts = [
    ["Istanbul", "\"Take a greatest journey on your life\""],
    ["Amsterdam", "\"We take photos as a return ticket to a moment otherwise gone\""],
    ["Paris", "\"Traveling – it leaves you speechless, then turns you into a storyteller\""],
    ["Sweden", "\"Once a year, go someplace you've never been before\""]
];

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    new rgbKineticSlider({
        slideImages: images,
        itemsTitles: texts,

        // Displacement maps (place these in your public folder)
        backgroundDisplacementSprite: './map-9.jpg',
        cursorDisplacementSprite: './displace-circle.png',

        // Cursor effects
        cursorImgEffect: true,
        cursorTextEffect: true,
        cursorScaleIntensity: 0.65,
        cursorMomentum: 0.14,

        // Swipe controls
        swipe: true,
        swipeDistance: window.innerWidth * 0.4,
        swipeScaleIntensity: 2,

        // Transition settings
        slideTransitionDuration: 1,
        transitionScaleIntensity: 30,
        transitionScaleAmplitude: 160,

        // Navigation
        nav: true,
        navElement: '.main-nav',

        // Image effects
        imagesRgbEffect: true,
        imagesRgbIntensity: 0.9,
        navImagesRgbIntensity: 80,

        // Text settings
        textsDisplay: true,
        textsSubTitleDisplay: true,
        textsTiltEffect: true,
        googleFonts: ["Playfair Display:700", "Roboto:400"],
        buttonMode: false,
        textsRgbEffect: true,
        textsRgbIntensity: 0.03,
        navTextsRgbIntensity: 15,

        // Text styling
        textTitleColor: "white",
        textTitleSize: 125,
        mobileTextTitleSize: 80,
        textSubTitleColor: "white",
        textSubTitleSize: 21,
        mobileTextSubTitleSize: 16,
        textSubTitleLetterspacing: 2,
        textSubTitleOffsetTop: 90,
        mobileTextSubTitleOffsetTop: 90
    });
});