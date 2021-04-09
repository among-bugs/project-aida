"use strict";

let login = document.getElementById('login');
let pass = document.getElementById('password');
const thisSecretPassword = 'admin123456';
// let alerts = {
//     when: {
//         missedTypingLoginOrPassFrase: {
//             content: ""
//         },
//         enteredIncorrectValues: {
//             content: ""
//         },
//         uncheckedCheckbox: {
//             content: ""
//         }
//     }
// };

$('#main-alert-show').hide();
$('#empty-or-null-alert-show').hide();
$('#error-alert-show').hide();
$('#unchecked-alert-show').hide();

function showMainAlert() {
    $('#main-alert-show').show();
}

setTimeout(showMainAlert, 1000);

function loginAndPassValid(thisLogin, thisPassword) {

    let selectedLoginToCheck, selectedPassToCheck;
    selectedLoginToCheck = thisLogin.value;
    selectedPassToCheck = thisPassword.value;

    function selectionToCheck(checkingValue, phrase) {
        if (checkingValue == "" || checkingValue == null) {
            $('#empty-or-null-alert-show').show();
        } else if (checkingValue == phrase) {
            if (document.getElementById("this-checkbox-to-staff-changing").checked) {
                document.location = `index.html`;
            } else {
                $('#unchecked-alert-show').show();
            }
        } else {
            $('#error-alert-show').show();
        }
    }
    
    selectionToCheck(selectedLoginToCheck, 'admin');
    selectionToCheck(selectedPassToCheck, thisSecretPassword);
    
}