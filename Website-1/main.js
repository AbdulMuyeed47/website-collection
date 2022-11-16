
// This code will create the three-line bar icon. Clicking on the icon it will turn into a cross and the mobile menu bar will appear. Clicking on it again will revert to the three-line bar icon and the mobile menu bar will disappear.

function toggleMenu(){

    var menu = document.getElementById("bar-icon"); // Will select the bar-icon ID
    menu.classList.toggle("open"); // apply the .open class in the css
    

    var x = document.getElementById("mobile-menu"); // Will select the mobile-menu ID
    if( x.style.display == 'block'){
        x.style.display = 'none'; // if the mobile-menu visible, the code will make it invisible
    }else{
        x.style.display = 'block'; // if the mobile-menu invisible, the code will make it visible
    }
}