const hamb = document.querySelector(`.header-right > a`);
const hambMenu = document.querySelector(`.hamburger-menu`)

hamb.addEventListener('click',function(){
  console.log('ho cliccato ');
  const menuHamb = document.querySelector(`.hamburger-menu`);
  menuHamb.classList.add('active');
});

hambMenu.addEventListener('click',function(){
  console.log('ho cliccato ');
  const menuHamb = document.querySelector(`.hamburger-menu`);
  menuHamb.classList.remove('active');
});

