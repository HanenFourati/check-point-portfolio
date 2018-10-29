function validateForm() {  /**check if any field is empty */
    let fn = document.getElementById('name').value;
    let ln = document.getElementById('last').value;
    let ph = document.getElementById("phone").value;
    let em = document.getElementById("email").value;
    let m = document.getElementById("message").value;
   
    if (fn == "") {
        alert("First Name must be filled out");
        return false;
    }
    else if (ln == "") {
        alert("Last Name must be filled out");
        return false;
    }
    else if (ph == "") {
            alert("Please enter a phone number");
            return false;}
    else if (em == "") {
            alert("Please enter an e-mail address");
            return false;}
    else if (m == "") {
             alert("Please enter a message");
             return false;} 
}
function checkmailformat() /**check the given email address format*/
{   let em = document.getElementById("email").value;
    let regex2=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex2.test(em)==false) {
        alert("Please enter a valide e-mail address");
        return false;
    } 
} 
function ckeckPhoneFormat() /**check the given mobiel number format*/
{   let ph = document.getElementById("phone").value;
    let regex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    if (regex.test(ph)==false) {
        alert("Please enter a valide phone number");
        return false;} 

}