{const image = document.querySelector('img');

let spaghetti_plain = "images/spaghetti.jpg";
let spaghetti_meatballs = "images/meatballs.jpg";

image.onmouseenter = (e) => {
   e.target.setAttribute('src', spaghetti_meatballs);
};

image.onmouseleave = (e) => {
   e.target.setAttribute('src', spaghetti_plain);
};}

const pic = document.querySelector('photo');

let rotini_plain = "images/rotini.jpg";
let rotini_red = "images/rotini_tomato.jpg";

pic.onmouseenter = (el) => {
   el.target.setAttribute('src', rotini_plain);
};

pic.onmouseleave = (e) => {
   el.target.setAttribute('src', rotini_red);
 };
