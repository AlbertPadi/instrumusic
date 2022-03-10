


//navbar init
document.addEventListener('DOMContentLoaded', ()=>{
  let element = document.querySelectorAll('.sidenav');
  let instance = M.Sidenav.init(element, options);
  console.log(instance);
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

let options = {
    indicator: true,
    numVisible: 5,
    padding: 15
}

//lightbox
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });













