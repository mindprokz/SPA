export default function () {
  var myLatlng = new google.maps.LatLng(51.128906, 71.406683);
	var myCenterMarker = new google.maps.LatLng(51.128906, 71.406683);
	var myOptions = {
    scrollwheel: false,
		zoom: 15,
		center: myLatlng,
		disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
    },
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps
    .Map(document.getElementById("map_block"), myOptions);

  var marker = new google.maps.Marker({
  		position: myCenterMarker,
  		map: map,
  		icon: 'images/geo_icon.png',
  		title:"Catering service"
  	});
}
