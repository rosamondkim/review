function onGeoOk(position){
    console.log(position);
}
function onGeoError(){
    alert("no");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);