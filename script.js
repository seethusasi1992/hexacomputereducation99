// JavaScript Document


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 10.553870446847784, lng: 76.17347621072918 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
	animation:	google.maps.Animation.BOUNCE
  });
}

window.initMap = initMap;



$(document).ready(function(){
		let status="";
		$("#cdit").click(function(){
				$("#cdit-course").css("display","block");
				$("#course").css("display","none");
		});
		$("#tally").click(function(){
				$("#tally-course").css("display","block");
				$("#course").css("display","none");
		});
		$("#other").click(function(){
				$("#other-course").css("display","block");
				$("#course").css("display","none");
		});
		
		$(".details-panel-title .slide-details").click(function(){
		
			if(status!=""){
				let id1=status.attr("id");
				status.css("display","none");
				
				/*
				let id2=$(this).next().next().attr("id");
				
				if(id1.localeCompare(id2)==0)
				{
				
					$(this).next().next().css("display","none");
				}*/
			}
			$(this).next().next().css("display","block");
			status=$(this).next().next();
		});
		$(".header-include").load("header.html");
});


