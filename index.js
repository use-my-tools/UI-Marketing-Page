


//Variables//

const headerButton = document.querySelector('.main-btn');
const bgImage = document.querySelector('.bg-wrapper');


TweenLite.from ('.logo', 3, {y:-200});
TweenLite.from ('.intro-banner-info', 3, {y:200});
TweenMax.set('.bgImage', {opacity: 0});
TweenMax.to('.bgImage', 4, {opacity: 1});