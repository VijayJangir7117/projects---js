let errorname=document.querySelector("#name-error");
let errorphone=document.querySelector("#phone-error");
let erroremail=document.querySelector("#Email-error") ;
let errortext=document.querySelector("#text-error");
let errorform=document.querySelector("#form-error");




function validname(){
  var inputname=document.querySelector("#name-input").value;
  if(inputname.length==0){
     errorname.innerHTML="Enter name";
     return false;
  }
  if (!inputname.match(/^[A-Za-z\s]{2,}$/)) {
    errorname.innerHTML = "Invalid name";
    return false;

  }
  errorname.innerHTML='valid';
  return true;
}

function validphone(){
  var inputphone=document.querySelector("#phone-input").value;
  if(inputphone.length<10){
     errorphone.innerHTML="invalid no";
     return false;
  }
  errorphone.innerHTML="valid";
  return true;


}
function validemail(){
  var inputemail =document.querySelector("#Email-input").value;
  if(inputemail.length==0){
    erroremail.innerHTML="enter email";
    return false;
  }
  if(!inputemail.includes("@")){
   erroremail.innerHTML="invalid email";
   return false;
  }
  erroremail.innerHTML='valid';
  return true;
}

function validtextarea(){
  var inputtext=document.querySelector("#text-input").value;
  let words=30;
  if(words>inputtext.length){
    errortext.innerHTML=words-inputtext.length+"words";
    return false;
  }
  if(inputtext.length==0){
    errortext.innerHTML="enter message here";
    return false;
  }
  errortext.innerHTML='VALID';
  return true;
}

function validform(){
 
  if(!validemail()|| !validtextarea()|| !validname()|| !validphone()){
    errorform.style.display="block";
   errorform.innerHTML="fix the issues";
    setTimeout(function(){errorform.style.display="none"},5000);
   return false;
   
  }
 
}
 