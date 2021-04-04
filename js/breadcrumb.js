"use strict";


const divClass = {
    element: 'ui',
    size: {
        mini: 'mini',
        tiny: 'tiny',
        small: 'small',
        large: 'large',
        big: 'big',
        huge: 'huge',
        massive: 'massive'
    },
    collection: {
        breadcrumb: 'breadcrumb'
    }
};

const div = document.createElement('div');

div.classList.add(divClass.element);
div.classList.add(divClass.size.small);
div.classList.add(divClass.collection.breadcrumb);
div.style = 'padding-top: 14px; padding-bottom: 20px';



// mainLinkA.href = 'index.html';
// mainLinkA.textContent = pages[0];
// mainLinkA.style = 

const links = {
    mainLinkA: document.createElement('a'),
    collectivesLinkA: document.createElement('a'),
    chairsA: document.createElement('a')
};

links.mainLinkA.classList.add('main-a-link');
links.mainLinkA.href = 'index.html';
links.mainLinkA.textContent = pages[0];
links.mainLinkA.style = 'font-size: 14px; color: #0D6EFD;';

links.collectivesLinkA.classList.add('main-a-link');
links.collectivesLinkA.textContent = pages[1];
links.collectivesLinkA.style = 'font-size: 14px; color: #0D6EFD;';

links.chairsA.classList.add('main-a-link');
links.chairsA.style = 'font-size: 24px; color: black;';



const rightDividerIcon = document.createElement('img');
rightDividerIcon.src = 'img/resource/angle-right-solid.svg';
rightDividerIcon.style = 'width: 22px; height: 14px';

const rightDividerIconToSetChair = document.createElement('img');
rightDividerIconToSetChair.src = 'img/resource/angle-right-solid.svg';
rightDividerIconToSetChair.style = 'width: 22px; height: 14px';
rightDividerIconToSetChair.id = 'in-ui-img-to-chair-last';

div.innerHTML = (links.mainLinkA.outerHTML);

div.append(rightDividerIcon);

div.innerHTML += (links.collectivesLinkA.outerHTML);

div.append(rightDividerIconToSetChair);

const br = document.createElement('br');

const a = document.createElement('a');

a.className = 'chairNameValueAAA';
a.style = `
    font-size: 22px; color: black; margin-top: 8px; display: inline-block;
`;

rightDividerIconToSetChair.after(br);

function setChairValue(index) {
    a.textContent = chairs[index].name;
}

br.after(a);
console.log(a.textContent);



document.querySelector('.cards').before(div);