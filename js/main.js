document.querySelectorAll('section').forEach(section => {
  section.addEventListener('mouseenter', function() {
      this.firstElementChild.classList.add('section-hover')
  }, false)
  section.addEventListener('mouseleave', function() {
      this.firstElementChild.classList.remove('section-hover')
  }, false)
})

AOS.init()

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
