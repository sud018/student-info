var firstname=document.forms['form']['firstname']
var lastname=document.forms['form']['lastname']
var username=document.forms['form']['username']
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var repassword = document.forms['form']['repassword'];
var uname = document.forms['form']['uname'];
var pword = document.forms['form']['pword'];
var unstring = "sudheer" ;
var pwstring = "1234" ;


var first_error=document.getElementById('first_error');
var last_error=document.getElementById('last_error');
var user_error=document.getElementById('user_error');
var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');
var repass_error=document.getElementById('repass_error');
var u_error=document.getElementById('u_error');
var p_error=document.getElementById('p_error');


function validated()
{
  if(firstname.value.length == '')
  {
    firstname.style.border="1px solid red";
    first_error.style.display = "block";
    firstname.focus();
    return false;
  }

  if(lastname.value.length == '')
  {
    lastname.style.border="1px solid red";
    last_error.style.display = "block";
    lastname.focus();
    return false;
  }

  if(username.value.length < 4)
  {
    username.style.border="1px solid red";
    user_error.style.display = "block";
    username.focus();
    return false;
  }

  if(email.value.length < 9)
  {
    email.style.border="1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if(password.value.length < 6)
   {
     password.style.border="1px solid red";
     pass_error.style.display = "block";
     password.focus();
     return false;
   }
   if(repassword.value != password.value)
    {
      repassword.style.border="1px solid red";
      repass_error.style.display = "block";
      repassword.focus();
      return false;
    }



       function firstname_verify()
       {
         if(firstname.value.length >=1)
         {
           firstname.style.border="1px solid green";
           first_error.style.display = "none";
           return true;
         }}

         function lastname_verify()
         {
           if(lastname.value.length >=1)
           {
             lastname.style.border="1px solid green";
             last_error.style.display = "none";
             return true;
           }}

   function username_verify()
   {
     if(username.value.length >=3)
     {
       username.style.border="1px solid green";
       user_error.style.display = "none";
       return true;

     }}
     function email_verify()
     {
       if(email.value.length >=8)
       {
         email.style.border="1px solid green";
         email_error.style.display = "none";
         return true;
       }
     }

     function pass_verify(){
     if(password.value.length >= 5)
     {
       password.style.border="1px solid green";
       pass_error.style.display = "none";
       return true;
     }
     }
     function repass_verify(){
     if(repassword.value == password.value)
     {
       repassword.style.border="1px solid green";
       repass_error.style.display = "none";
       return true;
     }
     }
   }

  


function valid()
   {


                  if( uname.value != unstring)
                  {
                    uname.style.border="1px solid red";
                    u_error.style.display = "block";
                    uname.focus();
                    return false;
                  }



if(pword.value != pwstring)
{
                     pword.style.border="1px solid red";
                     p_error.style.display = "block";
                     pword.focus();
                     return false;
                   }





                  function uname_verify()
                   {

                     if( uname.value == unstring)
                     {
                       uname.style.border="1px solid green";
                       u_error.style.display = "none";
                       return true;

                     }

                   }

                     function pword_verify(){

                     if(pword.value == pwstring)
                     {
                       pword.style.border="1px solid green";
                       p_error.style.display = "none";
                       return true;
                     }



   }
}
