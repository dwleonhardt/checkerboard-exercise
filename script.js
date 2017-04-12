function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (var i = 1; i < 100; i++) {
  var body = document.getElementsByTagName("body")[0];
  var tile = document.createElement("div");
  tile.style.float = 'left';
  tile.style.width = '11.1%';
  tile.style.paddingBottom = '11.1%';
  body.appendChild(tile);
  if (i % 2 === 0) {
    tile.style.backgroundColor = getRandomColor();
  } else {
    tile.style.backgroundColor = getRandomColor();
  }
}
