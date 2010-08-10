// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;

function initialize() {
  var latlng = new google.maps.LatLng(48.8419,2.3424);
  
  var myOptions = {
    zoom: 5,
    center: latlng,
    mapTypeId: 'roadmap'
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  
  setMarker(latlng);
}

function initialize_with_latlng(lat, lng) {
  geocoder = new google.maps.Geocoder();

  var latlng = new google.maps.LatLng(lat, lng);
  var myOptions = {
    zoom: 5,
    center: latlng,
    mapTypeId: 'roadmap'
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  
  setMarker(latlng);
}

function codeLatLng() {
  var lat = document.getElementById("client_latitude").value;
  var lng = document.getElementById("client_longitude").value;
  
  var lat = parseFloat(lat);
  var lng = parseFloat(lng);
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        
        setMarker(latlng);
        
      } else {
        alert("No results found");
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

function setMarker(latlng){
  if (marker){marker.setMap(null);}
  marker = new google.maps.Marker({
      position: latlng, 
      map: map,
      draggable: true
  });
  // infowindow.setContent(results[1].formatted_address);
  // infowindow.open(map, marker);
  
  google.maps.event.addListener(marker, 'dragend', function() {
    document.getElementById("client_longitude").value = marker.getPosition().lng();
    document.getElementById("client_latitude").value = marker.getPosition().lat();
    map.setCenter(marker.getPosition());
  });
}