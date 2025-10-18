  let counter = 0;
  let slideIndex = 0;
  let images = document.querySelectorAll('.image')

  images[0].style.display = 'block';

  function go(val) {
    images[counter].style.display = 'none';
    images[counter].style.display = 'none';
    images[counter].style.display = 'none';


    counter += val;
    if (counter < 0) counter = 2;
    if (counter > 2) counter = 0;

    images[counter].style.display = 'block';

  }