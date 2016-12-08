import menu from './menu';
import map from './map.js';
import { modalInit } from './modal_form.js';
import initModal from './modal.js';
import initSlider from './slider.js';


menu();
initSlider();
map();
modalInit();
initModal();

// fancybox
$(".fancybox").click(function() {
	$(".fancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'fade'
	});
});

document.querySelector('#stocks .image_slide img').src = document.querySelector('#stocks .slides .slide img').src;
