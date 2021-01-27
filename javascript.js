function sendFeedback(event) 
{
    event.preventDefault();

var formData = event.srcElement;

    document.getElementById("thankYou").innerText = "Hey " + formData.name.value + "!" + " It seems you are also a food lover, like me! Keep an eye on your inbox for my reply!" ;

    console.log(formData.name.value);
    console.log(formData.email.value);
    console.log(formData.message.value);
}
function myFunction() {
    var x =document.getElementById(myMain-nav)
    if (x.className === "main-nav") {
        x.className += "responsive";
    } else {
        x.className = "main-nav";
    }
}