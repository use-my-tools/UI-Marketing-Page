


//Variables//

const headerButton = document.querySelector('.main-btn');
const bgImage = document.querySelector('.bg-wrapper');


TweenLite.from ('.logo', 3, {y:-200});
TweenLite.from ('.intro-banner-info', 3, {y:200});
TweenMax.set('bgImage', {opacity: 0});
TweenMax.to('bgImage', 4, {opacity: 1});


//Team Member Expand//

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