"use strict";

const smtps = {
    gmail: {
        smtp: 'smtp.gmail.com',
        port: 465
    },
    elasticEmail: {
        smtp: 'smtp.elasticemail.com',
        port: 2525
    },
    protonmail: {
        smtp: 'smtp.protonmail.com',
        port: 8080 //default
    }

}

const emails = {
    sultan: {
        mail: 'sultanscreed@gmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: '8eb500a4-bc1e-4d9a-813e-7f7ad973e097'
        }
    },
    developer: {
        mail: 'aida.school.developer@protonmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: ''
        }
    },
    administrator: {
        mail: '39.highschool.guardian@gmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: ''
        }
    },
    registrator: {
        mail: '39.highschool.registrar@gmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: ''
        }
    },
    personnelDepartment: {
        mail: '39.highschool.personal.department@gmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: ''
        }
    }
};

const contents = {
    toSendto: {
        administrator: {
            toRestore: {
                subject: 'Құпия сөзді қалпына келтіру • Администрация',
                body: `<html>
                        <h2>Құрметті гимназия админитрациясы!</h2>

                      </html>`
            }
        },
        registrator: {
            toRestore: {
                subject: 'Құпия сөзді қалпына келтіру • Регистратура',
                body: `<html>
                        <h2>Құрметті гимназия регистратурасы!</h2>

                      </html>`
            }
        },
        personnelDepartment: {
            toRestore: {
                subject: 'Құпия сөзді қалпына келтіру • Кадрлар бөлімі',
                body: `<html>
                        <h2>Құрметті гимназия кадрлар бөлімі!</h2>

                      </html>`
            }
        }
    }
};

const accordionButton = document.querySelector('.accordion-button');

function sendEmail(selectedToken, sendTo, sendFrom, contentSubject, contentBody) { //selectedToken, to, from, content
    Email.send({
        SecureToken: selectedToken,
        To: sendTo,
        From: sendFrom,
        Subject: contentSubject,
        Body: contentBody //"<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert("mail sent successfully")
    );
}

function emailSendingButton() {

    switch (accordionButton.textContent) {
        case 'Бөлімді таңдаңыз':
            break;
        case 'Администратор':
            sendEmail(emails.sultan.smtp.securityToken,
                emails.administrator.mail, emails.sultan.mail,
                contents.toSendto.administrator.toRestore.subject,
                contents.toSendto.administrator.toRestore.body);
           window.alert('successful!');
            break;
        case 'Регистратор':
            sendEmail(emails.developer.securityToken,
                emails.registrator.mail, emails.developer.mail,
                contents.toSendto.registrator.toRestore.subject,
                contents.toSendto.registrator.toRestore.body);
            console.log('mail sent successfully to registrar!');
            break;
        case 'Кадрлар бөлімі':
            sendEmail(emails.developer.securityToken,
                emails.personnelDepartment.mail, emails.developer.mail,
                contents.toSendto.personnelDepartment.toRestore.subject,
                contents.toSendto.personnelDepartment.toRestore.body);
            console.log('the message successfully sended to personal department!'); 
            break;
        default:
            console.log('asdasd');
    }
}


function isClicked(selectedA) {
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