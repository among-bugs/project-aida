"use strict";

let login = document.getElementById('login');
let pass = document.getElementById('password');

let alerts = {
    main: {
        creating :
        `<div 
            class="alert alert-warning alert-dismissible fade show" 
            role="alert" 
            style="font-size: small;">
        </div>`,

        buttonToClose: `
            <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="alert" 
                aria-label="Close">
            </button>`
    },

    when: {
        missedTypingLoginOrPassFrase: {
            content: "123456789"
        },
        enteredIncorrectValues: {
            content: ""
        },
        uncheckedCheckbox: {
            content: ""
        }
    }
};

let alertToInsert = alerts.main.creating;
// // alertToInsert.outerHTML = 'role="alert"';
// for (let indx = 0; indx < alerts.main.classlists.length; indx++ ) {
//     alertToInsert.className += (` ${alerts.main.classlists[indx]}`);
// }

function loginAndPassValid(thisLogin, thisPassword) {
    let selectedLoginToCheck, selectedPassToCheck;
    selectedLoginToCheck = thisLogin.value;
    selectedPassToCheck = thisPassword.value;
    
    function showAlert() {
        alertToInsert.innerHTML =  
        alerts.when.missedTypingLoginOrPassFrase.content + alerts.main.buttonToClose;
        document.querySelector('.before-alert').after(alertToInsert);
    }

    // function  checkingInputs(SelectionToCheck) {
    if (selectedLoginToCheck == "" || selectedLoginToCheck == null) {
        showAlert();
    }

    if (selectedPassToCheck == "" || selectedPassToCheck == null) {
        showAlert();
    }

    // if (selectedLoginToCheck == 'admin' && selectedPassToCheck == "admin123456") {
    //         if (document.getElementById("this-checkbox-to-staff-changing").checked) {
    //             location = `index.html`;
    //         }
    // }
    // else {
    //     console.log('invalid values');
    // }
}