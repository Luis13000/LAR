document.getElementById('imageFilter').addEventListener('change', function() {
  const category = this.value;
  const images = document.querySelectorAll('#imageGallery img');
  
  images.forEach(function(image) {
    if (category === '') {
      image.style.display = 'block';
    } else {
      if (image.getAttribute('data-category') === category) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    }
  });
});