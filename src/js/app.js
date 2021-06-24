const topButton = document.getElementById('buttonTop');

topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

function changeBg() {
    const img = [
        'url("/image/gabriel ghnassia A9h6OsAxTyQ unsplash.png")',
        'url("/image/pool.png")',
        'url("/image/palm.png")',
    ]
    const header = document.getElementById('header');
    const background = img[Math.floor(Math.random() * img.length)];
    header.style.backgroundImage = background;
}
setInterval(changeBg, 500);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function openCity(cityName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
  
  }
  document.getElementById("defaultOpen").click();