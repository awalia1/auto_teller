var knicks = [
  "kevin-knox.jpg",
  "porzingis.jpg",
  "frank.jpg",
  "hezonja.jpg",
  "trophy.jpg"
]

var gallery = document.getElementById("gallery");


var count = 0;
for (thisItem in knicks){
  // print img tag
  // set img src= "images/" + knicks[count]
  var newImage = document.createElement('img')
  newImage.src = "images/" + knicks[count];
  newImage.classList.add("responsive");
  newImage.classList.add("image-container");
  gallery.appendChild(newImage);
  count = count + 1;
}
