// document.querySelector('select').addEventListener('input', function(){
//     const value = this.value;

//  document.querySelectorAll('ul').forEach(function(ul){
//      if (value === ul.id) {
//         ul.className = '';
//      }
//      else{
//         ul.className = 'hidden';
//      }
     
//  })
// });


// const articles = [
//     {
//         id:"article-1",
//         title: "hello world",
//         image:"images/image.jpg",
//         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, facere expedita velit nisi quaerat aperiam quasi blanditiis eligendi totam sunt temporibus labore officiis commodi quia cupiditate, repellendus ipsam accusamus odit?"

//     },
//     {
//         id:"article-2",
//         title: "hello world",
//         image:"images/image.jpg",
//         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, facere expedita velit nisi quaerat aperiam quasi blanditiis eligendi totam sunt temporibus labore officiis commodi quia cupiditate, repellendus ipsam accusamus odit?"

//     },
//     {
//         id:"article-2",
//         title: "hello world",
//         image:"images/image.jpg",
//         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, facere expedita velit nisi quaerat aperiam quasi blanditiis eligendi totam sunt temporibus labore officiis commodi quia cupiditate, repellendus ipsam accusamus odit?"

//     },
// ]

// articles.forEach(article =>{
//     const article = document.createElement('article');
//     const h1 = document.createElement('h1');
//     const img = document.createElement('img');
//     const p = document.createElement('p');

//     h1.textContent = article.title;
//     img.src = article.image;
//     p.textContent = article.body;

//     articleElement.append

// })




var acc = document.getElementsByClassName("asa");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var pansh1 = this.nextElementSibling;
    if (pansh1.style.display === "block") {
        pansh1.style.display = "none";
    } else {
        pansh1.style.display = "block";
    }
  });
}