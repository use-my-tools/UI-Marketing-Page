
// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname)));
// //app.use("/styles", express.static(__dirname));
// //app.use("/images", express.static(__dirname + '/Images'));
// //app.use("/scripts", express.static(__dirname + '/scripts'));

// // viewed at based directory http://localhost:8080/
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// // add other routes below
// // app.get('/about', function (req, res) {
// //   res.sendFile(path.join(__dirname + 'views/about.html'));
// // });

// app.listen(process.env.PORT || 8080);


//Variables//

const headerButton = document.querySelector('.main-btn');
const bgImage = document.querySelector('.bg-wrapper');


TweenLite.from ('.logo', 3, {y:-200});
TweenLite.from ('.intro-banner-info', 3, {y:200});
TweenMax.set('.bgImage', {opacity: 0});
TweenMax.to('.bgImage', 4, {opacity: 1});