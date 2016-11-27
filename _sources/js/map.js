export default function () {
  var myLatlng = new google.maps.LatLng(51.154388, 71.441285);
	var myCenterMarker = new google.maps.LatLng(51.154310, 71.450293);
	var myOptions = {
    scrollwheel: false,
		zoom: 15,
		center: myLatlng,
		disableDefaultUI: true,
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
