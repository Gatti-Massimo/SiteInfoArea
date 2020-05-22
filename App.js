var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Submit() {

    var name = Form.name.value;
    var lastName = Form.lastName.value;
    var email = Form.email.value;
    var date = new Date(Form.DateOf.value);  
    var gender = Form.Gender.value;
    var textArea = Form.TextArea.value;

    //Double check that every field has been filled, !! date check not working !!
    if (name != "" && lastName != "" && email != "" && date != "" && gender != "" && textArea != "") {

        if (!mailformat.test(email)) {

            alert("Wrong email format!");
        } else {
            document.getElementById("outBox").innerHTML = "We have received your email!";
        }
    } else {
        document.getElementById("outBox").innerHTML = "Fill all the fields!";
    }
    return false;
}


function Information() {

    //Get all the variables written
    var opening = "YOUR DATA:\n\n";
    var name = "Name:   " + Form.name.value + "       ";
    var lastName = "Last name: " + Form.lastName.value + "\n";
    var gender = "Gender: " + Form.Gender.value + "     ";
    var email = "Email:    " + Form.email.value + "\n\n";
    var textArea = "Your message: " + Form.TextArea.value;

    //Get parts of the date and put it back in order
    var date = new Date(Form.DateOf.value);  
    var day = date.getDate();    
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var outDate = "   Date of birth: " + [day, month, year].join('/') + "\n";

    var outString = opening + name + lastName + gender + outDate + email + textArea;
    alert(outString);
}
