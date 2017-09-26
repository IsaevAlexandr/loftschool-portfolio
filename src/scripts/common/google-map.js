function initMap() {
    var reutov = {lat: 55.760713, lng: 37.854598};
    var center = {lat: 55.765713, l8ng: 37.854598};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        disableDefaultUI: true,
        center: center
    });
    var marker = new google.maps.Marker({
        position: reutov,
        map: map
    });
}
export {initMap};
