  let counter = 0;
  let slideIndex = 0;
  let images = document.querySelectorAll('.image')
  let timer
  images[0].style.display = 'block';

  function go(val) {
    images[counter].style.display = 'none';
    images[counter].style.display = 'none';
    images[counter].style.display = 'none';


    counter += val;
    if (counter < 0) counter = 2;
    if (counter > 2) counter = 0;
    console.log('counter = ',counter)

    images[counter].style.display = 'block';
    
    clearTimeout(timer)
    timer = setTimeout(()=>go(val), 1000)

  }


  go(1)
  document.addEventListener('click', res=>clearTimeout(timer));