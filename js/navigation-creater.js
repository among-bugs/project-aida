"use strict";

const pages = ['Басты бет', 'Біздің коллектив'];

const navigation = document.createElement('navigation');

navigation.className = 'header-navigation';

document.body.prepend(navigation);

const selectedNavigationTag = document.querySelector('.header-navigation');



const nav = document.createElement('nav');

const navClasses = ['navbar', 'navbar-expand-sm', 'navbar-dark', 'fixed-top', 'bg-primary'];

const container = '<div class="container-fluid"></div>';

for (let indx = 0; indx < navClasses.length; indx++ ) {
    nav.classList.add(navClasses[indx]);
}

selectedNavigationTag.prepend(nav);

selectedNavigationTag.querySelector('.navbar').innerHTML = container;

const selectedContainerInNavigationTag = 
selectedNavigationTag.querySelector('.navbar').querySelector('.container-fluid');

const brand = document.createElement('a');

brand.classList.add('navbar-brand');
brand.href = '#';
brand.style = 
`
    font-family:Verdana, Geneva, Tahoma, sans-serif; 
`;
selectedContainerInNavigationTag.prepend(brand);

const paragraph = document.createElement('p');

paragraph.style = 'color: white;';

paragraph.textContent = 'MAGJAN GIMNAZIASY';

selectedContainerInNavigationTag.querySelector('.navbar-brand').prepend(paragraph);

const button = 
`<button data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
</button>`;

selectedContainerInNavigationTag.innerHTML += (button);

const btnConfig = selectedContainerInNavigationTag.querySelector('button');

btnConfig.className = 'navbar-toggler';
btnConfig.type = 'button';

const span = document.createElement('span');

span.className = 'navbar-toggler-icon';
span.style = 'color: black;';
btnConfig.prepend(span);

const divAppEndContainer = document.createElement('div');
divAppEndContainer.className = 'collapse navbar-collapse';
divAppEndContainer.id = 'navbarTogglerDemo02';

selectedContainerInNavigationTag.append(divAppEndContainer);

const ui = document.createElement('ui');
ui.className = 'navbar-nav me-auto mb-2 mb-lg-0';

divAppEndContainer.prepend(ui);

const selectedUi = divAppEndContainer.querySelector('ui');

const li = '<li class="nav-item"></li>';

for (let indx = 0; indx < pages.length; indx++ ) {
    selectedUi.innerHTML += li;
}

const lies = selectedUi.querySelectorAll('li');

lies.forEach((item,i) => {
    const aNavigationLink = `<a class="nav-item" href="#">${pages[i]}</a>`;
    item.innerHTML = aNavigationLink;
    item.id = `li-${i + 1}`;
    item.querySelector('.nav-item').style = 'font-size: 20px; font-style: none;';
    item.querySelector('.nav-item').id = `a-nav-item-${i}`;
});

document.getElementById('a-nav-item-0').classList.add('nav-link');
document.getElementById('a-nav-item-1').innerHTML = 
`
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Біздің коллектив
</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">

</ul>
</li>
`;

for (let index = 0; index < chairs.length; index++ ){
  const li = '<li></li>';
  document.querySelector('.nav-item.dropdown').querySelector('.dropdown-menu').innerHTML += li;
  const selectedThisLies = document.querySelector('.dropdown-menu').querySelectorAll('li');
  selectedThisLies.forEach((item, i) => {
    const a = `<a class="dropdown-item" onclick="getTeachers(chairs[${i}].content);" href="#"></a>`;
    item.id = `li-${i}`;
    item.innerHTML = a;
    item.querySelector('a').textContent = `${chairs[i].name}`;
    item.querySelector('a').style = 'width: auto; font-style: bold; font-size: 15px;';

    item.innerHTML += '<hr class="dropdown-divider">';
    item.querySelector('hr').id = `hr-id-${i}`;
    item.querySelector('a').id = `a-in-li-index-${i}`;
  });
}
document.getElementById('hr-id-9').remove();


