"use strict";

const emails = {
    sultan: {
        mail: 'sultanscreed@gmail.com',
        securityToken: '5a8d474f-a4f1-4bf3-af4b-6ff75454e277'
    },
    developer: {
        mail: 'aida.school.developer@protonmail.com',
        securityToken: '994dbe83-a2a6-45f6-9576-ed72e8827ab0'
    },
    administrator: {
        mail: '39.highschool.guardian@gmail.com',
        securityToken: '9d01f9ca-c3c5-4eba-a74a-d1365d406f15',
    },
    registrator: {
        mail: '39.highschool.registrar@gmail.com',
        securityToken: 'e45e0868-60ea-4082-8ff4-379e6eb43f7a'
    },
    personnelDepartment: {
        mail: '39.highschool.personal.department@gmail.com',
        securityToken: '57c40788-947a-474d-ba1b-31efb9d567fc'
    }
};

const contents = {
    toSendto: {
        administrator: {
            toRestore: {
                subject: 'administrator!',
                body: '<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>'
            }
        },
        registrator: {
            toRestore: {
                subject: 'registrator!',
                body: '<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>'
            }
        },
        personnelDepartment: {
            toRestore: {
                subject: 'personnelDepartment!',
                body: '<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>'
            }
        }
    }
};

const accordionButton = document.querySelector('.accordion-button');

function sendEmail(selectedToken, sendTo, sendFrom, content) { //selectedToken, to, from, content
    Email.send({
        SecureToken: emails.sultan.securityToken,
        To: emails.sultan.mail,
        From: emails.sultan.mail,
        Subject: contents.toSendto.administrator.subject,
        Body: contents.toSendto.administrator.body //"<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert("mail sent successfully")
    );
}

function emailSendingButton() {

    switch (accordionButton.textContent) {
        case 'Бөлімді таңдаңыз':
            break;
        case 'Администратор':
            sendEmail();
            // sendEmail(mails.developer.securityToken,
            // mails.administrator.mail, mails.developer.mail, 
            // contents.toSendto.administrator);
            console.log(mails.developer.securityToken,
                mails.administrator.mail, mails.developer.mail,
                contents.toSendto.administrator.body);
            break;
        case 'Регистратор':
            break;
        case 'Кадрлар бөлімі':
            break;
        default:
            console.log('asdasd');
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