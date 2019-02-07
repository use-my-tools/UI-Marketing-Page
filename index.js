


//Variables//

const headerButton = document.querySelector('.main-btn');
const bgImage = document.querySelector('.bg-wrapper');
const staggerRowLeft = document.querySelector('.row-stagger-wrapper-left');
const staggerRowRight = document.querySelector('.row-stagger-wrapper-right');
const staggerLast = document.querySelector('#row-stagger-last');
const picContent = document.querySelector('#pic-content img');
const iframe = document.querySelector('.iframe');


TweenLite.from ('.logo', 3, {y:-200});
TweenLite.from ('.intro-banner-info', 3, {y:200});
TweenMax.set('bgImage', {opacity: 0});
TweenMax.to('bgImage', 4, {opacity: 1});

class Member{
  constructor(passedIn) {
    this.passedIn = passedIn;
    this.expand = passedIn.querySelector('.expand');
    this.expand.textContent += 'Read My Bio';
    this.expand.addEventListener('click', () => this.expandMember());
  }

  expandMember() {
    this.passedIn.classList.toggle('team-open');
  }
}
let teamMembers = document.querySelectorAll('.member');
teamMembers.forEach(member => new Member(member));


staggerRowLeft.addEventListener('mouseover', event =>{
  TweenLite.to (staggerRowLeft, 3, {border:"4px dotted white"});
  
});
staggerRowLeft.addEventListener('mouseleave', event =>{
  TweenLite.to (staggerRowLeft, 3, {border:"0px"});
});

staggerRowRight.addEventListener('mouseover', event =>{
  TweenLite.to (staggerRowRight, 3, {border:"4px dotted white"});
  
});
staggerRowRight.addEventListener('mouseleave', event =>{
  TweenLite.to (staggerRowRight, 3, {border:"0px"});
});
staggerLast.addEventListener('mouseover', event =>{
  TweenLite.to (staggerLast, 3, {border:"4px dotted white"});
  
});
staggerLast.addEventListener('mouseleave', event =>{
  TweenLite.to (staggerLast, 3, {border:"0px"});
});





