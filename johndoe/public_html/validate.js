
function validate()
{
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');


if(username.value.trim()==""||password.value.trim()=="")
{
    alert("Username and password can't be blank");
    return false;
}
else{
    true;
}
if(email.value==''){
    alert("Please enter your Email");
}
else
{
    true;
}
if(password.value<8) {
alert("Password should contain atleast 8 charcters");
return false;
}
else{
    true;
}
}