"use strict";

const selectedDropDownItem = document.querySelector('.dropdown-menu').querySelectorAll('li');

const navbarToggler = document.querySelector('.navbar-toggler');

selectedDropDownItem.forEach((item, i) => {
  const clickedA = item.querySelector('a');
  clickedA.onclick = function() {
    getTeachers(chairs[i].content);
    console.log('clicked ' + i);
    navbarToggler.click();
    setChairValue(i);
  };
});