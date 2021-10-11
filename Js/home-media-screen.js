function toogleNavbar(){
    let nav = document.getElementById('left-menu');
    if(nav.style.display == 'none'){
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

function leftMenuLoad(){
    var $window = $(window);
    var windowsize = $window.width();
    console.log(windowsize);
    let nav = document.getElementById('left-menu');
    if (windowsize <= 800) {
        nav.style.display = 'none';
        console.log("Hello world!");
    }
    else{
        nav.style.display = 'flex';
    }
   
}

