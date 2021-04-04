"use strict";

const mainContainer = document.createElement('div');
mainContainer.classList.add('container');
mainContainer.id = 'main-container';
mainContainer.style = 'padding-top: 50px';
const mainRow =  '<div class="row"></div>';

document.querySelector('.header-navigation').after(mainContainer);

document.getElementById('main-container').innerHTML = mainRow;

const colsInMainRow =  '<div class="col"></div>';

const selectedMainRow = document.getElementById('main-container').querySelector('.row');

for (let index = 0; index < 3; index++ ) {
  selectedMainRow.innerHTML += colsInMainRow;
}

selectedMainRow.querySelectorAll('.col').forEach((item, i) => {
  item.classList.add(`main-col-${i}`);
  item.id = `main-col-ID-${i}`;
});

selectedMainRow.querySelector('.main-col-0').classList.add('col-xs-auto');
selectedMainRow.querySelector('.main-col-1').classList.add('col-auto');
selectedMainRow.querySelector('.main-col-2').classList.add('col-xs-auto');

const cardsClass = document.querySelector('.cards');

selectedMainRow.querySelector('.main-col-1').append(cardsClass);

const containerFluid = '<div class="container-fluid" style="padding-bottom: 18px; margin-top: 0px; padding-top: 18px; padding-left: 18px; padding-right: 18px;"></div>';
cardsClass.innerHTML = containerFluid;

const rowstyle = '<div class="row row-cols-1 row-cols-md-4 g-3"></div>';
const colstag = '<div class="col"></div>';



function getTeachers(thisTeachersSubject) {
  
  cardsClass.querySelector('.container-fluid').innerHTML = rowstyle;

  const thisrow = cardsClass.querySelector('.container-fluid').querySelector('.row.row-cols-1');
  

  thisrow.innerHTML = null;

  for (let index = 0; index < thisTeachersSubject.length; index++ ) {
    thisrow.innerHTML += (colstag);
  }

  const cols = cardsClass.querySelector('.container-fluid').querySelector('.row.row-cols-1').querySelectorAll('.col');

  cols.forEach((item, i) => {


    const thisCard = 
`<div class="ui card" style="border-radius: 10px; width: auto; 
       background-color:#FAFBF6;
        margin-left: 4px; margin-right: 4px; margin-top: 4px; margin-bottom: 4px;" >
  <div class="image" style="border-radius: 15px;">
    <img src="${thisTeachersSubject[i].img}">
  </div>
  <div class="content">
   <a class="header" style="font-size: medium; color: black">${thisTeachersSubject[i].fullname}</a>
    <div class="description">
     ${thisTeachersSubject[i].subjectKAZ}
    </div>
  </div>
  <div class="extra content">
    <a style="color: dark;">
      ${thisTeachersSubject[i].category}
    </a>
  </div>
  <div class="ui two bottom attached buttons">
    <div type="button" class="ui button" style="width: 42%;"></div>
    <div type="button" class="ui inverted button" 
    data-bs-toggle="modal" data-bs-target="#staff${thisTeachersSubject[i].surname}${thisTeachersSubject[i].name}${thisTeachersSubject[i].patronymic}"
    style=" width: auto;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif; font-size: 16px">
    <a>Толығырақ</a>
    </div>
  </div>
</div>`;

    item.innerHTML = thisCard;
    
    // const selecteduitwobottomattachedbuttons = document.querySelector('.ui.two.bottom.attached.buttons');
    const selectedUiInvertedButton = document.querySelector('.ui.inverted.button');
    selectedUiInvertedButton.onclick = function() {
      console.log(' this is ' + i);

    };
    // document.getElementById(`a-id-${i}`).onclick = function () {
    //   const selectedAllModalPlace = document.querySelector('.all-modal-place');
    //   selectedAllModalPlace.querySelector('.modal.fade').id = `${thisTeachersSubject[i].fullname}`;
    // };
  });


  const selectedCols = thisrow.querySelectorAll('.col');
selectedCols.forEach((item, i) => {
  item.id = `col-${i}`;

});
}

// padding-left: 1px;
//  padding-right: 1px; padding-top: 1px; padding-bottom: 1px;
function first() {
  cardsClass.querySelector('.container-fluid').innerHTML = 'rowstyle';
}

first();


