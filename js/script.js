var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    },
},
});

/*Project Plan Page*/
function selectButton (elem) {
  var a = document.getElementsByTagName('button');
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('selected')
  }
  elem.classList.add('selected');
}

function selectButton2 (elem) {
  if (elem.classList.contains("selected2")) {
    elem.classList.remove("selected2")
  } else {
    elem.classList.add("selected2")
  }
}
/*Project Plan Page*/