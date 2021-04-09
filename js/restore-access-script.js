"use strict";

const smtps = {
    gmail: {
        smtp: 'smtp.gmail.com',
        port: 25
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
    developer: {
        mail: 'aida.39.highschool.developer@gmail.com',
        smtp: {
            name: smtps.protonmail,
            securityToken: '7f37bc3e-1b56-4fc3-a344-366791a04ada',
            port: smtps.protonmail.port
        }
    },
    administrator: {
        mail: '39.highschool.guardian@gmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: '4d264213-8546-407a-92cb-8775c31ea906',
            port: smtps.gmail.port
        }
    },
    registrator: {
        mail: '39.highschool.registrar@gmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: '2d93d9d5-2d7c-4e73-88a8-b3cf3a026dd4',
            port: smtps.gmail.port
        }
    },
    personnelDepartment: {
        mail: '39.highschool.personal.department@gmail.com',
        smtp: {
            name: smtps.gmail,
            securityToken: 'ab35d5ce-93c3-4e2f-933c-fcd84d1f3de2',
            port: smtps.gmail.port
        }
    }
};
        
const contents = {
    toSendto: {
        administrator: {
            toRestore: {
                subject: 'Құпия сөзді қалпына келтіру • Администрация',
                body: `<html lang="en"> 
                        <h2>Құрметті гимназия админиcтрациясы!</h2>
                            <br>
                            Cіздің жүйеге кіру құпия сөзіңіз: <strong>${thisSecretPassword}</strong>.
                            <br> 
                            Егер тағы да <strong>құпия сөзді</strong> қалпына келтіру қызметін пайдаланғыңыз келсе, осы жерден таба аласыз!
                      </html>`
            }
        },
        registrator: {
            toRestore: {
                subject: 'Құпия сөзді қалпына келтіру • Регистратура',
                body: `<html>
                        <h2>Құрметті гимназия регистратурасы!</h2>
                                <br>
                                Cіздің жүйеге кіру құпия сөзіңіз: <strong>${thisSecretPassword}</strong>.
                                <br> 
                            Егер тағы да <strong>құпия сөзді</strong> қалпына келтіру қызметін пайдаланғыңыз келсе, осы жерден таба аласыз!   
                      </html>`
            }
        },
        personnelDepartment: {
            toRestore: {
                subject: 'Құпия сөзді қалпына келтіру • Кадрлар бөлімі',
                body: `<html>
                        <h2>Құрметті гимназия кадрлар бөлімі!</h2>
                            <br>
                            Cіздің жүйеге кіру құпия сөзіңіз: <strong>${thisSecretPassword}</strong>.
                            <br> 
                            Егер тағы да <strong>құпия сөзді</strong> қалпына келтіру қызметін пайдаланғыңыз келсе, осы жерден таба аласыз!
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
        Body: contentBody  //"<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert("mail sent successfully")
    );
}

function emailSendingButton() {
    if () {

    } else {
        
    }
    switch (accordionButton.textContent) {
        case 'Бөлімді таңдаңыз':
            break;
        case 'Администратор':
            sendEmail(emails.developer.smtp.securityToken,
                emails.administrator.mail, emails.developer.mail,
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