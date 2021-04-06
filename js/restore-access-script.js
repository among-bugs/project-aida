"use strict";

const tokens = {
    developer: {
        mail: 'aida.developer@mail.ru',
        securityToken: 'd3450a92-a614-47bc-baa1-8c2d94efb9d2'
    },
    administrator: {
        mail: 'aida.schoolapp.guardian@mail.ru',
        securityToken: '6223ac20-e0ef-4106-a133-8cb68fce4ed3',
    },
    registrator: {
        mail: 'aida.schoolapp.registrator@mail.ru',
        securityToken: '039592cb-74d6-4ea6-b81a-d636cb7c81fb'
    },
    personnelDepartment: {
        mail: 'aida.schoolapp.personnel.depart@mail.ru',
        securityToken: '88dd8d6b-cd3f-4c8d-903f-3d462df3d862'
    }
};

const contents = {
    toSendto: {
        administrator: {
            subject: '',
            body: ''
        },
        registrator: {
            subject: '',
            body: ''
        },
        personnelDepartment: {
            subject: '',
            body: ''
        }
    }
};

const accordionButton = document.querySelector('.accordion-button');

function sendingEmail(selectedToken) {
    Email.send({
        SecureToken : "<your generated token>",
        To : 'recipient@example.com',
        From : "sender@example.com",
        Subject : "Test Email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
        }).then(
            message => alert("mail sent successfully")
        );
}

function emailSendingButton() {

    switch (accordionButton.textContent) {
        case 'Бөлімді таңдаңыз': 
            break;
        case 'Администратор':
            break;
        case 'Регистратор':
            break;
        case 'Кадрлар бөлімі':
            break;
        default: console.log('asdasd');
    }

}


function isClicked(selectedA) {
    console.log('123456');
    const selectedAContent = document.getElementById(selectedA); 
    switch (selectedA) {
        case 'firstA':
            accordionButton.innerHTML = selectedAContent.textContent;
        break;
        case 'secondA':
            accordionButton.innerHTML = selectedAContent.textContent;
        break;
        case 'thirdA':
            accordionButton.innerHTML = selectedAContent.textContent;
        break;
    }
    accordionButton.click();
}
