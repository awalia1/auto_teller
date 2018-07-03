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
  newImage.width = "100";
  gallery.appendChild(newImage);
  count = count + 1;
}
