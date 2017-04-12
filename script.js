
for (var i = 1; i < 100; i++) {
  var body = document.getElementsByTagName("body")[0];
  var tile = document.createElement("div");
  tile.style.float = 'left';
  tile.style.width = '11.1%';
  tile.style.paddingBottom = '11.1%';
  body.appendChild(tile);
  if (i % 2 === 0) {
    tile.style.backgroundColor = 'black';
  } else {
    tile.style.backgroundColor = 'red';
  }
}
// var body = document.getElementsByTagName("body")[0];
// var tile = document.createElement("div");
// tile.style.float = 'left';
// tile.style.backgroundColor = 'black';
// tile.style.width = '11.1%';
// tile.style.paddingBottom = '11.1%';
// body.appendChild(tile);
