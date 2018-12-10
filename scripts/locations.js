// MAKE MAP OBJECTS
function initMap() {
    var divHumber = document.getElementById("humbMap");
    var divTransylvania = document.getElementById("transMap");
    var divBurial = document.getElementById("burMap");
    var divSalem = document.getElementById("salemMap");

    let humbLatLng = {lat:43.728824,lng:-79.607865}
    let transLatLng = {lat:45.515060,lng:25.367153}
    let burLatLng = {lat:43.651347,lng:-123.184539}
    let salemLatLng = {lat:42.522783,lng:-70.897121}

    var gMapHumber = new google.maps.Map(divHumber, {
        center: humbLatLng,
        zoom: 10
    });

    var gMapTransylvania = new google.maps.Map(divTransylvania, {
        center: transLatLng,
        zoom: 10
    });

    var gMapBurial = new google.maps.Map(divBurial, {
        center: burLatLng,
        zoom: 10
    });

    var gMapSalem = new google.maps.Map(divSalem, {
        center: salemLatLng,
        zoom: 10
    });

    var markerHumb = new google.maps.Marker({
        position: humbLatLng,
        map: gMapHumber,
        title: 'Humber North Campus'
    });

    var markerTransylvania = new google.maps.Marker({
        position: transLatLng,
        map: gMapTransylvania,
        title: 'Dracula\'s Castle in Transylvania'
    });

    var markerBurial = new google.maps.Marker({
        position: burLatLng,
        map: gMapBurial,
        title: 'Ancient Indian Burial Ground'
    });

    var markerSalem = new google.maps.Marker({
        position: salemLatLng,
        map: gMapSalem,
        title: 'Salem, Massachusetts, site of Witch Trials'
    });


}
