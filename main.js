let FIRST_NAME = document.getElementById('in1');
let LAST_NAME = document.getElementById('in2');
let EMAIL_ADDRES = document.getElementById('in3');
let PASSWORD = document.getElementById('in5');
let SING_IN_NOW = document.querySelector('.Sing_in_now');
let BLOCK1 = document.querySelector('.block');
let SING_UP_NOW = document.querySelector('.Sing_up_now');
let BLOCK2 = document.querySelector('.block2');
let BLOCK3 = document.querySelector('.block3');
let EMAIL_IN = document.getElementById('in6');
let PASSWORD_IN = document.getElementById('in7')
let USER_INFO = document.querySelector('.user_Info');
let EMAIL_INFO = document.querySelector('.email_info');
let PROFESSION = document.querySelector('.profession');
let BTN = document.getElementById('btn');
let BTN_2 = document.getElementById('btn_2');
let BTN_3 = document.getElementById('btn_3');


SING_IN_NOW.addEventListener('click', function () {
    BLOCK1.style.display = 'none';
    BLOCK2.style.display = 'block';

})
SING_UP_NOW.addEventListener('click', function () {
    BLOCK2.style.display = 'none';
    BLOCK1.style.display = 'block';

})


document.getElementById('in1').addEventListener('focus', function () {
    this.style.outline = '2px solid rgb(0, 238, 255)';
    this.style.border = '1px solid white';
})
document.getElementById('in1').addEventListener('blur', function () {
    this.style.border = '1px solid black';
    this.style.outline = '0';
})


document.getElementById('in2').addEventListener('focus', function () {
    this.style.outline = '2px solid rgb(0, 238, 255)';
    this.style.border = '1px solid white';
})
document.getElementById('in2').addEventListener('blur', function () {
    this.style.border = '1px solid black';
    this.style.outline = '0';
})



document.getElementById('in3').addEventListener('focus', function () {
    this.style.outline = '2px solid rgb(0, 238, 255)';
    this.style.border = '1px solid white';
})
document.getElementById('in3').addEventListener('blur', function () {
    this.style.border = '1px solid black';
    this.style.outline = '0';
})


document.getElementById('in5').addEventListener('focus', function () {
    this.style.outline = '2px solid rgb(0, 238, 255)';
    this.style.border = '1px solid white';
})
document.getElementById('in5').addEventListener('blur', function () {
    this.style.border = '1px solid black';
    this.style.outline = '0';
})


//BTN
BTN.addEventListener('mousedown', function () {
    this.style.backgroundColor = 'rgb(2, 175, 175)';
})
BTN.addEventListener('mouseup', function () {
    this.style.backgroundColor = 'rgb(3, 139, 139)';
})
BTN.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'rgb(3, 139, 139)';
})
BTN.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(2, 175, 175)';
})
//btn_2
BTN_2.addEventListener('mousedown', function () {
    this.style.backgroundColor = 'rgb(78, 236, 86)';
})
BTN_2.addEventListener('mouseup', function () {
    this.style.backgroundColor = 'rgb(62, 194, 68)';
})
BTN_2.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'rgb(62, 194, 68)';
})
BTN_2.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(78, 236, 86)';
})

//btn_3
BTN_3.addEventListener('mousedown', function () {
    this.style.backgroundColor = 'rgb(78, 236, 86)';
})
BTN_3.addEventListener('mouseup', function () {
    this.style.backgroundColor = 'rgb(62, 194, 68)';
})
BTN_3.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'rgb(62, 194, 68)';
})
BTN_3.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(78, 236, 86)';
})




BTN.addEventListener('click', function () {
    //first name
    let count = 0;
    let regEXP = /^[a-zA-Z]{1,20}$/;

    if (!regEXP.test(FIRST_NAME.value)) {
        document.querySelector('.in1_d').style.display = 'block';
        FIRST_NAME.style.outline = '2px solid rgb(206, 75, 75)';
        FIRST_NAME.style.border = '1px solid white';
        document.querySelector('.no_1').style.display = 'block';
        count++;
    }
    else {
        document.querySelector('.in1_d').style.display = 'none';
        FIRST_NAME.style.outline = '2px solid rgb(68, 233, 53)';
        FIRST_NAME.style.border = '1px solid white';
        document.querySelector('.no_1').style.display = 'none';
        document.querySelector('.yes_1').style.display = 'block';
    }

    //last name
    if (!regEXP.test(LAST_NAME.value)) {
        document.querySelector('.in2_d').style.display = 'block';
        LAST_NAME.style.outline = '2px solid rgb(206, 75, 75)';
        LAST_NAME.style.border = '1px solid white';
        document.querySelector('.no_2').style.display = 'block';
        count++;
    }
    else {
        document.querySelector('.in2_d').style.display = 'none';
        LAST_NAME.style.outline = '2px solid rgb(68, 233, 53)';
        LAST_NAME.style.border = '1px solid white';
        document.querySelector('.no_2').style.display = 'none';
        document.querySelector('.yes_2').style.display = 'block';
    }


    //EMAIL
    let regExp_EMAIL = /^\S{1,}@([a-z]+)\.([a-z]{2,5})$/;

    if (!regExp_EMAIL.test(EMAIL_ADDRES.value)) {
        document.querySelector('.in3_d').style.display = 'block';
        document.querySelector('.in3_d').textContent = 'Please provide a valid Email address.';
        EMAIL_ADDRES.style.outline = '2px solid rgb(206, 75, 75)';
        EMAIL_ADDRES.style.border = '1px solid white';
        document.querySelector('.no_3').style.display = 'block';
        count++;
    }
    else {
        document.querySelector('.in3_d').style.display = 'none';
        EMAIL_ADDRES.style.outline = '2px solid rgb(68, 233, 53)';
        EMAIL_ADDRES.style.border = '1px solid white';
        document.querySelector('.no_3').style.display = 'none';
        document.querySelector('.yes_3').style.display = 'block';

    }


    //PASSWORD
    let regEXP_PASSWORD = /^\w{8,15}$/;

    if (!regEXP_PASSWORD.test(PASSWORD.value)) {
        document.querySelector('.in5_d').style.display = 'block';
        PASSWORD.style.outline = '2px solid rgb(206, 75, 75)';
        PASSWORD.style.border = '1px solid white';
        document.querySelector('.no_5').style.display = 'block';
        count++;
    }
    else {
        document.querySelector('.in5_d').style.display = 'none';
        PASSWORD.style.outline = '2px solid rgb(68, 233, 53)';
        PASSWORD.style.border = '1px solid white';
        document.querySelector('.no_5').style.display = 'none';
        document.querySelector('.yes_5').style.display = 'block';
    }
    if (count == 0) {
        add_User();
    }
    count = 0;
});

BTN_2.addEventListener('click', function () {
    if (!localStorage.getItem('User')) {
        document.querySelector('.in7_d').style.display = 'block';
        document.querySelector('.in7_d').textContent = 'Localstorage is empty.';
    }
    else if (localStorage.getItem('User')) {
        let count = 0;
        for (let i = 0; i < JSON.parse(localStorage.getItem('User')).length; i++) {
            if (JSON.parse(localStorage.getItem('User'))[i].password == PASSWORD_IN.value && JSON.parse(localStorage.getItem('User'))[i].email == EMAIL_IN.value) {
                count++;
                document.querySelector('.in7_d').style.display = 'none';
                USER_INFO.textContent = `${JSON.parse(localStorage.getItem('User'))[i].firstname} ${JSON.parse(localStorage.getItem('User'))[i].lastname}`;
                EMAIL_INFO.textContent = JSON.parse(localStorage.getItem('User'))[i].email;
                BLOCK2.style.display = 'none';
                BLOCK3.style.display = 'block';
                PASSWORD_IN.value = '';
                EMAIL_IN.value = '';
                break
            }
        }
        if (count == 0) {
            document.querySelector('.in7_d').style.display = 'block';
            document.querySelector('.in7_d').textContent = 'Incorrect email or password.';
        }
        count = 0;
    }
    else {
        document.querySelector('.in7_d').style.display = 'none';
    }

});


//btn 3
BTN_3.addEventListener('click', function () {
    BLOCK3.style.display = 'none';
    BLOCK2.style.display = 'block';

});

function add_User() {
    let InfoUser = [];
    class User {
        constructor(firstname, lastname, email, password) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.password = password;
        }
    }
    let user = new User(FIRST_NAME.value, LAST_NAME.value, EMAIL_ADDRES.value, PASSWORD.value);

    if (localStorage.getItem('User')) {
        InfoUser = JSON.parse(localStorage.getItem('User'));
        let count = 0;
        for (let i = 0; i < JSON.parse(localStorage.getItem('User')).length; i++) {
            if (JSON.parse(localStorage.getItem('User'))[i].email == EMAIL_ADDRES.value) {
                count++;
                document.querySelector('.in3_d').style.display = 'block';
                document.querySelector('.in3_d').textContent = 'This email alredy exist';
                EMAIL_ADDRES.style.outline = '2px solid rgb(206, 75, 75)';
                EMAIL_ADDRES.style.border = '1px solid white';
                document.querySelector('.no_3').style.display = 'block';
                break
            }
        }
        if (count == 0) {
            InfoUser.push(user);
            localStorage.setItem('User', JSON.stringify(InfoUser));
            FIRST_NAME.value = '';
            LAST_NAME.value = '';
            EMAIL_ADDRES.value = '';
            PASSWORD.value = '';
        }
        count = 0;
    }
    else {
        InfoUser.push(user);
        localStorage.setItem('User', JSON.stringify(InfoUser));
    }
};



