
var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n){
  showSlide(slideIndex +=n );
}

function currentSlide(n){
  showSlide(slideIndex =n );
}

function showSlide(n){
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("dots");

  if( n > slides.length){slideIndex = 1};
  if( n < 1){slideIndex = slides.length};

  for(i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  };

  for(i=0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "");
  };

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
///////////////////slides a.m/////////////////////////////
var mymap = L.map('mapid').setView([31.3644716,37.539539],7);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFzaGFyYXEiLCJhIjoiY2s0Z3VsMDJ2MHkxYzNrbjZsanQ1azJvOCJ9.fl26WGhpVcKKBSfVMWKVew', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(mymap);

  var marker1 = L.marker([32.505291,35.8639814]).addTo(mymap);
  var marker2 = L.marker([31.8617214,35.6381076]).addTo(mymap);
  var marker3 = L.marker([31.9782825,35.9537335]).addTo(mymap);
  var marker4 = L.marker([30.1959253,35.7264125]).addTo(mymap);
  var marker5 = L.marker([31.5863056,35.8079502]).addTo(mymap);
  
  marker1.bindPopup("<b>Irbid</b><br>Princess Basma Center for Development.").openPopup();
  marker2.bindPopup("<b>Balqa:</b><br>مركز الأميرة بسمة للتنمية الشونة الجنوبية").openPopup();
  marker3.bindPopup("<b>Amman , ZENID</b><br>Innovation labs مختبرات الابتكار").openPopup();
  marker4.bindPopup("<b>Ma&#39;an</b><br>Ma'an Knowledge Station").openPopup();
  marker5.bindPopup("<b>Madaba</b><br>مسجد المثلث").openPopup();
  // var popup = L.popup()
  // .setLatLng([32.346,36.216])
  // .setContent("I am a standalone popup."
  // .openOn(mymap);
  var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


//***********************************/


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




