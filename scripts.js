/* Add your JavaScript to this file */



function newsletter_sign_up(){
	var newsletter=document.querySelector(".newsletter");
    var sub_btn = newsletter.querySelector("form button.btn");
    var email = newsletter.querySelector(" form input[type=\"email\"]");
    email.setAttribute("placeholder", "Email address");
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    var msgbar = newsletter.querySelector(".message");
    sub_btn.onclick = (event)=>{
        event.preventDefault();
        if (email.value.length != 0 && emailRegex.test(email.value.toLowerCase())){
            msgbar.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        }
        else{
            msgbar.innerHTML = "Please enter a valid email address."
        }
    }
}



window.onload= newsletter_sign_up;