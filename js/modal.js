"use strict";

// const modal = require("semantic-ui-modal");

const mainModalDiv = document.createElement('div');
mainModalDiv.classList.add('all-modal-place');

document.getElementById('main-container').after(mainModalDiv);

const selectedAllModalPlace = document.querySelector('.all-modal-place');


staff.forEach((item, i) => {
    const modalDiv = `
    <div 
    class="modal fade" 
    id="staff${item.surname}${item.name}${item.patronymic}"
    tabindex="-1" 
    aria-labelledby="arialabalID${item.surname}${item.name}${item.patronymic}" 
    aria-hidden="true">`;
    selectedAllModalPlace.innerHTML += modalDiv;
    document.getElementById(`staff${item.surname}${item.name}${item.patronymic}`).prepend(modalFadeElements.modalDialogDiv);
    modalFadeElements.modalDialogDiv.prepend(modalFadeElements.modalContent);
    modalFadeElements.modalContent.prepend(modalFadeElements.modalHeader);
    modalFadeElements.modalHeader.style = 'background: #0D6EFD';
    modalFadeElements.modalHeader.prepend(modalFadeElements.modalHeaderTitle);
    modalFadeElements.modalHeaderTitle.id = `arialabalID${item.surname}${item.name}${item.patronymic}`;
    modalFadeElements.modalHeaderTitle.textContent = item.subjectKAZ;
    modalFadeElements.modalHeaderTitle.style = 'color: white; font-size: 16px';

    modalFadeElements.modalHeader.after(modalFadeElements.modalBody);
    modalFadeElements.modalBody.prepend(modalFadeElements.modalBodyContainer);
    modalFadeElements.modalBodyContainer.prepend(modalFadeElements.modalBodyContainerRow);
    modalFadeElements.modalBodyContainerRow.prepend(modalFadeElements.firstColumn);

    modalFadeElements.firstColumn.prepend(modalFadeElements.imageInFirstColumn);
    modalFadeElements.imageInFirstColumn.src = `${item.img}`;
    modalFadeElements.imageInFirstColumn.style = 'width: 330px;';
   

    modalFadeElements.modalBodyContainerRow.append(modalFadeElements.secondColumn);
    modalFadeElements.secondColumn.prepend(modalFadeElements.ulInSecondColumn.main);

    modalFadeElements.ulInSecondColumn.main.append(modalFadeElements.ulInSecondColumn.lists.fullnameList.textContent);
    
    
    // ListImagesProperties.fullnameListImg.main.src = ListImagesProperties.fullnameListImg.source;
    // ListImagesProperties.fullnameListImg.main.width = '20px';

    const ListsIconImage = {
        FullNameList: {
            female: '<img src="img/resource/womanlinerdraw.svg" width="22px" alt="">',
            male: '<img src="img/resource/manlinerdraw.svg" width="22px" alt="">'
        },
        StatusList: {
            teacher: '<img src="img/resource/presentation.svg" width="22px" alt="">'
        },
        CategoryList: {
            default: '<img src="img/resource/laboratory-certificate.svg" width="22px" alt="">'
        },
        PhoneList: {
            call: '<img src="img/resource/phone-call.svg" width="22px" alt="">',
            whatsapp: '<img src="img/resource/whatsapp.svg" width="22px" alt="">',
            telegram:  '<img src="img/resource/telegram.svg" width="22px" alt="">',
        },
        EmailList: {
            default: '<img src="img/resource/email.svg" width="22px" alt="">'
        }
    };
    if (item.sex == 'female') {
        modalFadeElements.ulInSecondColumn.lists.fullnameList.textContent.innerHTML = 
            (`${ListsIconImage.FullNameList.female}  ФИО: ${item.fullname}`); // = selectedFullNameListIconImage + ' ' + item.fullname;
    }   else if (item.sex == 'male') {
        modalFadeElements.ulInSecondColumn.lists.fullnameList.textContent.innerHTML = 
            (`${ListsIconImage.FullNameList.male}  ФИО: ${item.fullname}`); 
    }

    modalFadeElements.ulInSecondColumn.main.append(modalFadeElements.ulInSecondColumn.lists.statusList.textContent);
    modalFadeElements.ulInSecondColumn.lists.statusList.textContent.innerHTML =
    `${ListsIconImage.StatusList.teacher}   Дәрежесі: ${item.statusKAZ}`;

    modalFadeElements.ulInSecondColumn.main.append(modalFadeElements.ulInSecondColumn.lists.categoryList.textContent);    
    modalFadeElements.ulInSecondColumn.lists.categoryList.textContent.innerHTML = 
        `${ListsIconImage.CategoryList.default} Категориясы: ${item.category}`;
    
    modalFadeElements.ulInSecondColumn.main.append(modalFadeElements.ulInSecondColumn.lists.phoneList.textContent);
    modalFadeElements.ulInSecondColumn.lists.phoneList.textContent.innerHTML = 
        `${ListsIconImage.PhoneList.call} Телефон нөмірі: ${item.phone}`;
    
    modalFadeElements.ulInSecondColumn.main.append(modalFadeElements.ulInSecondColumn.lists.emailList.textContent);
    modalFadeElements.ulInSecondColumn.lists.emailList.textContent.innerHTML = 
        `${ListsIconImage.EmailList.default} Поштасы: ${item.email}`;

    modalFadeElements.modalBody.after(modalFadeElements.modalFooter.main);

    const thisModalButtonCLOSE = 
    `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Жабу</button>`;
    const thisModalButtonCHANGE =  
    `<a type="button" href="staff-data-changing.html" class="btn btn-light">Өзгерту</a>`;



    modalFadeElements.modalFooter.main.innerHTML =  thisModalButtonCHANGE + thisModalButtonCLOSE;
    // modalFadeElements.modalFooter.button.outerHTML = `data-bs-dismiss="modal"`;
    // modalFadeElements.modalFooter.button.innerHTML = ' data-bs-dismiss="modal"';
    // modalFadeElements.modalFooter.button.textContent = 'Жабу';
});





// selectedAllModalPlace.querySelector('.modal.fade').prepend(modalFadeElements.modalDialogDiv);


//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>