document.getElementById('Click').addEventListener('click', myFunction);

function myFunction() {
  let ani = document.getElementById('animation');

  if (ani.classList.contains('slide-out-top')) {
    let ani = document.getElementById('animation');
    ani.classList.remove('slide-out-top');
    ani.classList.add('slide-in-top');
  } else if (ani.classList.contains('slide-in-top')) {
    let ani = document.getElementById('animation');
    ani.classList.remove('slide-in-top');
    ani.classList.add('slide-out-top');
  } else {
    let ani = document.getElementById('animation');
    ani.classList.add('slide-out-top');
  }
}
