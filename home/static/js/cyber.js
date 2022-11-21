let signup = document.form
let username = document.form.username
let fname = document.form.firstname
let lname = document.form.lname
let email = document.form.email
let state = document.form.state
let phone = document.form.phone
let address = document.form.address
let password = document.form.password

let validate = () =>{
    if(username.value.length <=0){
        alert('supply username');
        username.focus()
        return form;
    }

    if(fname.value.length <=0){
        alert('supply first name');
        fname.focus()
        return form;
    }
    if(lname.value.length <=0){
        alert('supply last name');
        lname.focus()
        return form;
    }
    if(email.value.length <=0){
        alert('supply email address');
        email.focus()
        return form;
    }
    if(state.value.length <=0){
        alert('supply state');
        state.focus()
        return form;
    }
    if(phone.value.length <=0){
        alert('supply Phone number');
        phone.focus()
        return form;
    }
    if(address.value.length <=0){
        alert('supply Home address');
        address.focus()
        return form;
    }
    if(password.value.length <=0){
        alert('supply password');
        password.focus()
        return form;
    }
}
