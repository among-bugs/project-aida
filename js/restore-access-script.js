"use strict";

const thisTypedEmailValue = document.getElementById('typeYourEmail').value;

let thisValue = document.forms["myForm"]["mailname"].value;

document.querySelector('.your-own-email-is-here').append(thisValue);

$('#own-mail-is-not-entered-alert-show').hide();
$('#own-mail-is-entered-alert-show').hide();
$('#administrator-sent-alert-show').hide();
$('#registrar-sent-alert-show').hide();
$('#personal-depart-sent-alert-show').hide();

const thisSecretPassword = "admin123456";

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
                            Cіздің жүйеге кіруге арналған құпия сөзіңіз: <strong>${thisSecretPassword}</strong>.
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
                                Cіздің жүйеге кіруге арналған құпия сөзіңіз: <strong>${thisSecretPassword}</strong>.
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
                            Cіздің жүйеге кіруге арналған құпия сөзіңіз: <strong>${thisSecretPassword}</strong>.
                            <br> 
                            Егер тағы да <strong>құпия сөзді</strong> қалпына келтіру қызметін пайдаланғыңыз келсе, осы жерден таба аласыз!
                        </html>`
            }
        },
        otherMail: {
            toRestore: {
                subject: `Құпия сөзді қалпына келтіру • ${thisTypedEmailValue}`,
                body: `<html>
                            <h2>Құрметті ${thisTypedEmailValue}!</h2>
                            <br>
                            Cіздің жүйеге кіруге арналған құпия сөзіңіз: <strong>${thisSecretPassword}</strong>.
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
        Body: contentBody //"<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => console.log("mail sent successfully!!!")
    );
}

function goNext() {
    function loadNextPage() {
        document.location = "index.html";
    }
    setTimeout(loadNextPage, 2000);
}

function accordionButtonHandlerSwitch() {
    switch (accordionButton.textContent) {
        case 'Бөлімді таңдаңыз':
            $('#own-mail-is-not-entered-alert-show').show();
            break;
        case 'Администратор':
            sendEmail(emails.developer.smtp.securityToken,
                emails.administrator.mail, emails.developer.mail,
                contents.toSendto.administrator.toRestore.subject,
                contents.toSendto.administrator.toRestore.body);
            $('#administrator-sent-alert-show').show();
            goNext();
            break;
        case 'Регистратор':
            sendEmail(emails.developer.securityToken,
                emails.registrator.mail, emails.developer.mail,
                contents.toSendto.registrator.toRestore.subject,
                contents.toSendto.registrator.toRestore.body);
            $('#registrar-sent-alert-show').show();
            goNext();
            break;
        case 'Кадрлар бөлімі':
            sendEmail(emails.developer.securityToken,
                emails.personnelDepartment.mail, emails.developer.mail,
                contents.toSendto.personnelDepartment.toRestore.subject,
                contents.toSendto.personnelDepartment.toRestore.body);
            $('#personal-depart-sent-alert-show').show();
            goNext();
            break;
        default:
            $('#own-mail-is-not-entered-alert-show').show();
        return false;
    }
}


function validateForm() {
    if (thisValue == "" || thisValue == null) {
        $('#own-mail-is-not-entered-alert-show').show();
      return false;
    } 
    if (thisValue == "sultanscreed@gmail.com") {
        // window.alert(thisValue);
        sendEmail(emails.developer.smtp.securityToken,
            thisValue, emails.developer.mail,
            contents.toSendto.otherMail.toRestore.subject,
            contents.toSendto.otherMail.toRestore.body);
            $('#own-mail-is-entered-alert-show').show();
        goNext();
    }
  }


function departmentsEmailSendingButton() {
    // if (thisTypedEmailValue == "" || accordionButton.textContent == "Бөлімді таңдаңыз") {
    //      $('#own-mail-is-not-entered-alert-show').show(); 
    // }

    if (accordionButton.textContent == "Бөлімді таңдаңыз") {
        return false;
    } else {
        accordionButtonHandlerSwitch();
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