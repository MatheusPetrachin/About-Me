document.querySelectorAll('section').forEach(section => {
  section.addEventListener('mouseenter', function() {
      this.firstElementChild.classList.add('section-hover')
  }, false)
  section.addEventListener('mouseleave', function() {
      this.firstElementChild.classList.remove('section-hover')
  }, false)
})

AOS.init()
