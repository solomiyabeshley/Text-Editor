document.getElementById('areaForColor').style.display = "none";
document.querySelector('#chooseColorOfBack').style.display = "none";
document.querySelector('#chooseImagesOfBack').style.display = 'none';
let areaForBackground = document.querySelector('#areaForBackground');
areaForBackground.style.display = 'none';
document.getElementById('downloadImage').style.display = 'none';
//bold text
function boldText() {
  let textToChange = document.getElementById('output');
  if (textToChange.classList.contains('bold')) {
    textToChange.classList.remove('bold');
    return;
  }
  textToChange.classList.add('bold');
}
//italic text
function italicText() {
  let italicText = document.getElementById('output');
  if (italicText.classList.contains('italic')) {
    italicText.classList.remove('italic');
    return;
  }
  italicText.classList.add('italic');
}

//underline text
function underlineText() {
  let underlineTxet = document.getElementById('output');
  if (underlineTxet.classList.contains('underline')) {
    underlineTxet.classList.remove('underline');
    return;
  }
  underlineTxet.classList.add('underline');
}

//line-through
function strikethroughText() {
  let lineThroughText = document.getElementById('output');
  if (lineThroughText.classList.contains('line-through')) {
    lineThroughText.classList.remove('line-through');
    return;
  }
  lineThroughText.classList.add('line-through');
}
//align Left
function alignLeft() {
  document.querySelector('#output').style.textAlign = "left";
}
//align Center
function alignCenter() {
  document.querySelector('#output').style.textAlign = "center";

}
//align Right
function alignRight() {
  document.getElementById('output').style.textAlign = 'right';
}
//font
function chooseFont(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById('output').style.fontFamily = listValue;
}
//size
function chooseSize() {
  let chooseSize = document.getElementById('chooseSize');
  document.getElementById('output').style.fontSize = chooseSize.value + 'px';
}
//color of text
function colorText() {
  document.getElementById('areaForColor').style.display = "block";
  document.getElementById('chooseColorOfText').style.opacity = "none";
  document.getElementById('output').style.height = '50%';
  document.getElementById('output').style.width = '50%';
  if (document.getElementById('areaForBackground').style.display = 'block') {
    document.getElementById('areaForBackground').style.display = 'none';
  }
}
function closeWindowForColor() {
  document.getElementById('areaForColor').style.display = 'none';
}
function saveColor() {
  let textColor = document.getElementById('sectionTextColor').value;
  output.style.color = textColor;
  document.querySelector('section').style.color = textColor;
  document.getElementById('areaForColor').style.display = "none";
}
//background color
function closeWindowForBackground() {
  document.getElementById('areaForBackground').style.display = 'none';
}
document.getElementById('areaForBackground').style.display = 'none';
function backgroundImgColor() {
  document.getElementById('areaForBackground').style.display = 'block';
  document.getElementById('chooseColorOfText').style.opacity = "none";
  if (document.getElementById('areaForColor').style.display = 'block') {
    document.getElementById('areaForColor').style.display = 'none';
  }
}
function colorB() {
  if (document.getElementById('chooseColorOfBack').style.display = 'flex') {
    document.getElementById('chooseImagesOfBack').style.display = 'none';
    document.getElementById('downloadImage').style.display = 'none';
  }
  document.querySelector('#chooseColorOfBack').style.display = 'block';
  document.querySelector('#chooseColorOfBack').style.width = '100%';
  document.querySelector('#chooseColorOfBack').style.height = '100%';
}
let areaForText = document.getElementById('areaForText');
function saveBackColor() {
  document.querySelector('#areaForBackground', '#chooseColorOfBack', '#downloadImage').style.display = 'none';
  let colorOfBackground = document.getElementById('colorOfBackground');
  output.style.background = colorOfBackground.value;
  document.querySelector('section').style.height = '100%';
  areaForText.style.background = colorOfBackground.value;
}

//background image
function chooseImagesOfBack() {
  if (document.getElementById('chooseImagesOfBack').style.display = 'flex') {
    document.getElementById('chooseColorOfBack').style.display = 'none';
    document.getElementById('downloadImage').style.display = 'none';
  }
  document.querySelector('#chooseImagesOfBack').style.display = 'block';
}
function img_1() {
  output.style.backgroundImage = "url('https://i.pinimg.com/originals/21/df/9f/21df9f5e0a33adb568ef57d5753f6618.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_2() {
  output.style.backgroundImage = "url('https://i.pinimg.com/originals/2a/f6/d1/2af6d1a50a1b2d08d517841849a61bf1.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_3() {
  output.style.backgroundImage = "url('https://i.pinimg.com/originals/6d/56/d1/6d56d17411324a2b739b8472bd07e53f.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_4() {
  output.style.backgroundImage = "url('https://img1.goodfon.ru/wallpaper/nbig/f/25/vysokoe-kachestvo-horoshee.jpg')";
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundPosition = 'center';
  output.style.backgroundSize = '100%';
}
function img_5() {
  output.style.backgroundImage = "url('https://avatars.mds.yandex.net/get-pdb/215709/ebcd30d5-79d0-4486-bd54-4047db2ddd5d/s1200')";
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundPosition = 'center';
  output.style.backgroundSize = '100%';
}
function img_6() {
  output.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/14/21/41/dry-weather-5044397_1280.jpg')";
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundPosition = 'center';
  output.style.backgroundSize = '100%';
}
function img_7() {
  output.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/15/04/11/lake-5045059_1280.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_8() {
  output.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/05/06/38/squirrel-5004736_1280.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_9() {
  output.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/12/07/55/landscape-5033193_1280.jpg')";
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_10() {
  output.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/05/07/25/sunset-5004905_1280.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_11() {
  output.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/08/04/19/ornamental-cherry-5015660_1280.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function img_12() {
  output.style.background = "url('https://cdn.pixabay.com/photo/2020/04/16/16/37/prunus-5051390_1280.jpg')";
  output.style.backgroundPosition = 'center';
  output.style.backgroundRepeat = 'no-repeat';
  output.style.backgroundSize = '100%';
}
function saveBack() {
  document.querySelector('#areaForBackground').style.display = 'none';
  document.querySelector('header').style.opacity = '1';
}
//завантаження картинки з комп'ютера
function readURL(event) {
  var getImagePath = URL.createObjectURL(event.target.files[0]);
  output.style.backgroundImage = ('background-image', 'url(' + getImagePath + ')');
  output.style.backgroundSize = '100%';
  output.style.backgroundPosition = 'center';
}
function DownloadImg() {
  if (document.getElementById('downloadImage').style.display = 'flex') {
    document.getElementById('chooseImagesOfBack').style.display = 'none';
    document.getElementById('chooseColorOfBack').style.display = 'none';
  }
  document.querySelector('#downloadImage').style.display = 'block';
}
// створити нумерований список
document.getElementById('pageForCreatingList').style.display = 'none';
function createListButton() {
  var x = document.createElement("LI");
  x.style.listStyleType = document.getElementById('typeMarkOfList').value;
  var t = document.createTextNode(document.getElementById('textLI').value);
  x.appendChild(t);
  document.getElementById("myList").appendChild(x);
}
//   відкрити при кліку список
function openNumberList() {
  document.getElementById('pageForCreatingList').style.display = 'block';
  if (document.getElementById('pageForCreatingList').style.display = 'block') {
    document.getElementById('pageForCreatingABCList').style.display = 'none';
    document.getElementById('pageForCreatingBulletedList').style.display = 'none';
  }
}
// закрити список
function closeNumberList() {
  document.getElementById('pageForCreatingList').style.display = 'none';
}
// СТВОРЕННЯ МАРКОВАНОГО СПИСКУ
document.getElementById('pageForCreatingBulletedList').style.display = 'none';
function closeBulleteList() {
  document.getElementById('pageForCreatingBulletedList').style.display = 'none';
}
function openBulletedList() {
  document.getElementById('pageForCreatingBulletedList').style.display = 'block';
  if (document.getElementById('pageForCreatingBulletedList').style.display = 'block') {
    document.getElementById('pageForCreatingList').style.display = 'none';
    document.getElementById('pageForCreatingABCList').style.display = 'none';

  }
}
function createBulletedListButton() {
  var x = document.createElement("LI");
  x.style.listStyleType = document.getElementById('typeMarkOfBulletedList').value;
  var t = document.createTextNode(document.getElementById('textBulletedLI').value);
  x.appendChild(t);
  document.getElementById("myList").appendChild(x);
}
//   СТВОРЕННЯ ABC СПИСКУ
document.getElementById('pageForCreatingABCList').style.display = 'none';
function openABCList() {
  document.getElementById('pageForCreatingABCList').style.display = 'block';
  if (document.getElementById('pageForCreatingABCList').style.display = 'block') {
    document.getElementById('pageForCreatingBulletedList').style.display = 'none';
    document.getElementById('pageForCreatingList').style.display = 'none';
  }
}
function closeABCList() {
  document.getElementById('pageForCreatingABCList').style.display = 'none';
}
function createABCListButton() {
  var x = document.createElement("LI");
  x.style.listStyleType = document.getElementById('typeMarkOfABCList').value;
  var t = document.createTextNode(document.getElementById('textABCLI').value);
  x.appendChild(t);
  document.getElementById("myList").appendChild(x);
}
// HTML OUTPUT
document.getElementById('pageForCreatingHTMLCode').style.display = 'none';
function openHTML() {
  document.getElementById('pageForCreatingHTMLCode').style.display = 'block';

}
function closeHTMLarea() {
  document.getElementById('pageForCreatingHTMLCode').style.display = 'none';
}
function addHTML() {
  document.querySelector('.addhtml').innerHTML = document.getElementById('fieldForHTMLcode').value;
  document.getElementById('pageForCreatingHTMLCode').style.display = 'none';
}
