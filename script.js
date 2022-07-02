function d(){
    var x=document.getElementById("code-edit").value
    document.getElementById("preview").innerHTML=x
}

function p(){
    window.print();
}

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "";

    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
});