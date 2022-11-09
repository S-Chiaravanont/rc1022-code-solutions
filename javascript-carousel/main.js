var imgArray = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS977UODr8_F5Qt2X85TULziO9BOkQj9BTtIA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsYO5a-QqgKpw2prf8emKtBMlDuEHLrJsSg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlV480dl3UmI31c8VuW30nb3JqzToyafRi9w&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ72BKH0pQxox4jVowBXhkfD9OSzCkwfPFeQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQa15eN1_eqkMkDRT9SwmTF5KkZvG2iJ8Q_Q&usqp=CAU'
];
var currentCarouselIndex = 0;
var $carousel = document.querySelector('#carousel');
var $carouselImg = document.querySelector('#carouselImg');
var $carouselDotDiv = document.querySelector('#carouselDotDiv');

updateCarouselDots(currentCarouselIndex);

var intervalID = null;

$carousel.addEventListener('click', carouselSwapper);
$carouselDotDiv.addEventListener('click', carouselDotClickHandle);

function carouselSwapper(event) {
  if (event.target.nodeName !== 'I') {
    return;
  }
  if (event.target.getAttribute('id') === 'backward') {
    carouselBackward(currentCarouselIndex);
  } else {
    carouselForward(currentCarouselIndex);
  }
  stopCarousel();
  startCarousel();
}

function carouselForward(carouselIndex) {
  if (currentCarouselIndex === imgArray.length - 1) {
    currentCarouselIndex = 0;
    $carouselImg.setAttribute('src', imgArray[currentCarouselIndex]);
  } else {
    currentCarouselIndex++;
    $carouselImg.setAttribute('src', imgArray[currentCarouselIndex]);
  }
  updateCarouselDots(currentCarouselIndex);
}

function carouselBackward(carouselIndex) {
  if (currentCarouselIndex === 0) {
    currentCarouselIndex = imgArray.length - 1;
    $carouselImg.setAttribute('src', imgArray[currentCarouselIndex]);
  } else {
    currentCarouselIndex--;
    $carouselImg.setAttribute('src', imgArray[currentCarouselIndex]);
  }
  updateCarouselDots(currentCarouselIndex);
}

function emptyDotRender() {
  var $carouselEmptyDot = document.createElement('i');
  $carouselEmptyDot.setAttribute('class', 'fa-regular fa-circle');
  return $carouselEmptyDot;
}

function filledDotRender() {
  var $carouselFilledDot = document.createElement('i');
  $carouselFilledDot.setAttribute('class', 'fa-solid fa-circle');
  return $carouselFilledDot;
}

function updateCarouselDots(carouselIndex) {
  $carouselDotDiv.innerHTML = '';
  for (var i = 0; i < imgArray.length; i++) {
    if (i === carouselIndex) {
      var filledDot = filledDotRender();
      filledDot.setAttribute('dataIndex', i);
      $carouselDotDiv.appendChild(filledDot);
    } else {
      var emptyDot = emptyDotRender();
      $carouselDotDiv.appendChild(emptyDot);
      emptyDot.setAttribute('dataIndex', i);
    }
  }
}

function carouselDotClickHandle(event) {
  if (event.target.nodeName !== 'I') {
    return;
  }
  for (var i = 0; i < imgArray.length; i++) {
    if (event.target.getAttribute('dataIndex') === String(i)) {
      $carouselImg.setAttribute('src', imgArray[i]);
      currentCarouselIndex = i;
      updateCarouselDots(currentCarouselIndex);
      break;
    }
  }
  stopCarousel();
  startCarousel();
}

function startCarousel() {
  if (!intervalID) {
    intervalID = setInterval(carouselForward, 3000, currentCarouselIndex);
  }
}

function stopCarousel() {
  clearInterval(intervalID);
  intervalID = null;
}

startCarousel();
