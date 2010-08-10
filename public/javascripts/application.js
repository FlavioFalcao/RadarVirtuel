// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

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
          marker = new google.maps.Marker({
              position: latlng, 
              map: map
          }); 
          infowindow.setContent(results[1].formatted_address);
          infowindow.open(map, marker);
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
