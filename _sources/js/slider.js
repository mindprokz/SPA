export default function init() {
  let _count = document.querySelectorAll('#stocks .slides .slide').length;
  let _width = document.querySelector('#stocks .slides .slide').clientWidth;
  let _calcValue = _count * _width + (_count  * 24) - 24 + 'px';

  document.querySelector('#stocks .slides .wrap').style.width = _calcValue;
  $(".slides").mCustomScrollbar({
    axis: "x",
  	theme: 'dark'
  });

  [...document.querySelectorAll('#stocks .slides .slide')].forEach( (elem) => {
    elem.addEventListener('click', function () {
      liActiveChange(this);
      changeStock(this);
    });
  });

  [...document.querySelectorAll('#stocks .slides .slide')].forEach( (elem) => {
    elem.addEventListener('mouseenter', function () {
      animImgChange(this)
    });
  });

  [...document.querySelectorAll('#stocks .slides .slide')].forEach( (elem) => {
    elem.addEventListener('mouseleave', function () {
      deactiveImgChange()
    });
  });
}

function changeStock(_elem) {
  let _src = _elem.children[0].src;

  document.querySelector('#stocks .image_slide img')
    .src = _src;
}

function liActiveChange(_elem) {
    document.querySelector('#stocks .slides .slide.active')
      .classList.remove('active');

    _elem.classList.add('active');
}

function animImgChange(_event_elem) {
  let _elem =   document.querySelector('#stocks .image_slide .anim_img');
  let _src = _event_elem.children[0].src;

  _elem.src = _src;

  setTimeout( () => {
    document.querySelector('#stocks .image_slide .anim_img')
      .classList.add('open');

  }, 200 );
}

function deactiveImgChange() {
  document.querySelector('#stocks .image_slide .anim_img')
    .classList.remove('open');

}
