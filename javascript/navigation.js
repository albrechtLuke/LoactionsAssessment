var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	
  var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) { //Nav Part 1. the scroll position
    document.getElementById("navbar").style.top = "0";
	} 
	
	else {
    document.getElementById("navbar").style.top = "-10vmin";
	}
	
  prevScrollpos = currentScrollPos;
}