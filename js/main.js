document.querySelectorAll('section').forEach(section => {
  section.addEventListener('mouseenter', function() {
      this.firstElementChild.classList.add('section-hover')
  }, false)
  section.addEventListener('mouseleave', function() {
      this.firstElementChild.classList.remove('section-hover')
  }, false)
})

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

AOS.init()
