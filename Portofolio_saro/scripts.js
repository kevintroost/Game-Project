
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show")
}

window.onclick = function(hide) {
    if (!hide.target.matches('.drop-button')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}


var birthDay = new Date("June 24, 2022 00:00:00").getTime();

var refresh = setInterval(function() {
    var timeNow = new Date().getTime();
    var difference = birthDay - timeNow;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

})
