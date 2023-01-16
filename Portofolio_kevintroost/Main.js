const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* up button */

upInteractive = false;

function autoToggle() {
  $('.arrow').toggleClass('auto');
}

$('.arrow').hover(function() {
  upInteractive = true;
  $('.arrow').removeClass('auto');
});

setInterval(function(){ 
  
  console.log(upInteractive);
  
  if(upInteractive === false) {
    autoToggle();
  }

},2000);