  let counter = 0;
  let slideIndex = 0;
  let images = document.querySelectorAll('.image')
  let timer
  images[0].style.display = 'block';

  function go(val) {
    images[counter].style.opacity = '0';
    images[counter].style.opacity = '0';
    images[counter].style.opacity = '0';


    counter += val;
    if (counter < 0) counter = 3;
    if (counter > 3) counter = 0;

    images[counter].style.opacity = '1';

    clearTimeout(timer)
    timer = setTimeout(()=>go(val), 2000)

  }


  go(1)
  document.addEventListener('click', res=>clearTimeout(timer));