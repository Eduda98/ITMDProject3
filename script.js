function initMap() {
  var lake = {lat: 47.9044, lng: -92.5537};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: lake
	  });
  var marker = new google.maps.Marker({
	  position: lake, 
	  map: map,
	  title: 'Click Here!',
	  animation: google.maps.Animation.BOUNCE
	  });
	  
	  
 map.addListener('center_changed', function() {
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 8000);
        });

        marker.addListener('click', function() {
          map.setZoom(12);
          map.setCenter(marker.getPosition());
		  infowindow.open(map, marker);
        });
		
var contentString = '<div id="content">'+
            '<p>Lake Vermilion and Muskego Point Resort hold a ton of sentimental value to me, making up a majority of the places my family all went for vacation throughout my childhood. Fishing, boating, swimming, and seeing friends and family again were always the highlights of the trips.</p>'+
            '</div>';
			var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
		
		
}