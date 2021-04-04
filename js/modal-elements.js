"use strict";


const modalFadeElements = {
    modalDialogDiv: document.createElement('div'),
    modalContent: document.createElement('div'),
    modalHeader: document.createElement('div'),
    modalHeaderTitle: document.createElement('h5'),
    modalBody: document.createElement('div'),
    modalBodyContainer: document.createElement('div'),
    modalBodyContainerRow: document.createElement('div'),
    firstColumn: document.createElement('div'),
    imageInFirstColumn: document.createElement('img'),
    secondColumn: document.createElement('div'),
    ulInSecondColumn: {
        main: document.createElement('ul'),
        lists: {
             fullnameList: {
                 iconImage: document.createElement('img'),
                 textContent: document.createElement('li')
             },
             statusList: {
                iconImage: document.createElement('img'),
                textContent: document.createElement('li')
             },
             categoryList: {
                iconImage: document.createElement('img'),
                textContent: document.createElement('li')
             },
             emailList: {
                iconImage: document.createElement('img'),
                textContent: document.createElement('li')
             },
             phoneList: {
                iconImage: document.createElement('img'),
                textContent: document.createElement('li')
             }
        }
    },
    modalFooter: {
        main: document.createElement('div'),
        button: document.createElement('button')
    }
};


modalFadeElements.modalDialogDiv.classList.add('modal-dialog');
modalFadeElements.modalDialogDiv.classList.add('modal-dialog-centered');
modalFadeElements.modalDialogDiv.classList.add('modal-fullscreen-sm-down');
modalFadeElements.modalDialogDiv.classList.add('modal-lg');

modalFadeElements.modalContent.className = 'modal-content';

modalFadeElements.modalHeader.className = 'modal-header';

modalFadeElements.modalHeaderTitle.classList.add('modal-title');
modalFadeElements.modalHeaderTitle.id = 'exampleModalLabel';

modalFadeElements.modalBody.classList.add('modal-body');

modalFadeElements.modalBodyContainer.classList.add('container-fluid');

modalFadeElements.modalBodyContainerRow.classList.add('row');
modalFadeElements.modalBodyContainerRow.classList.add('align-items-center');

modalFadeElements.firstColumn.classList.add('col-sm-auto');
modalFadeElements.firstColumn.style = `
    rotate: initial; padding-top: 5px; padding-bottom: 5px;`;

const imgInfirstColumnClasses = [
    'mx-auto',
    'float-start',
    'img-thumbnail'
];

imgInfirstColumnClasses.forEach((item) => {
    modalFadeElements.imageInFirstColumn.classList.add(item);
});

modalFadeElements.secondColumn.classList.add('col-sm-auto');

modalFadeElements.ulInSecondColumn.main.classList.add('list-group');
modalFadeElements.ulInSecondColumn.main.classList.add('list-group-flush');


// for (let index = 0; index < modalFadeElements.ulInSecondColumn.lists; index++) {
//     modalFadeElements.ulInSecondColumn.lists[index].classList.add('list-group-item');
//     modalFadeElements.ulInSecondColumn.main.append(modalFadeElements.ulInSecondColumn.lists[index]);
// }

modalFadeElements.ulInSecondColumn.lists.fullnameList.textContent.classList.add('list-group-item');
modalFadeElements.ulInSecondColumn.lists.statusList.textContent.classList.add('list-group-item');
modalFadeElements.ulInSecondColumn.lists.categoryList.textContent.classList.add('list-group-item');
modalFadeElements.ulInSecondColumn.lists.emailList.textContent.classList.add('list-group-item');
modalFadeElements.ulInSecondColumn.lists.phoneList.textContent.classList.add('list-group-item');

modalFadeElements.modalFooter.main.classList.add('modal-footer');

// modalFadeElements.modalFooter.button.classList.add('btn');
// modalFadeElements.modalFooter.button.classList.add('btn-secondary');
// modalFadeElements.modalFooter.button.type = 'button';

