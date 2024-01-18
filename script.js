function openbar() {
    document.getElementById("demo").style.width = "300px";
}

function closebar() {
    document.getElementById("demo").style.width = "0";
}

var drop1 = document.querySelector(".drop1").style;
var drop2 = document.querySelector(".drop2").style;
var drop3 = document.querySelector(".drop3").style;
var drop4 = document.querySelector(".drop4").style;
var drop5 = document.querySelector(".drop5").style;
function show1() {
    if (drop1.display == "block") {
        drop1.display = "none";
    }
    else {
        drop1.display = "block";
        drop2.display = "none";
        drop3.display = "none";
        drop4.display = "none";
        drop5.display = "none";
    }
}
function show2() {
    if (drop2.display == "block") {
        drop2.display = "none";
    }
    else {
        drop2.display = "block";
        drop1.display = "none";
        drop3.display = "none";
        drop4.display = "none";
        drop5.display = "none";
    }
}
function show3() {
    if (drop3.display == "block") {
        drop3.display = "none";
    }
    else {
        drop3.display = "block";
        drop1.display = "none";
        drop2.display = "none";
        drop4.display = "none";
        drop5.display = "none";
    }
}
function show4() {
    if (drop4.display == "block") {
        drop4.display = "none";
    }
    else {
        drop4.display = "block";
        drop1.display = "none";
        drop2.display = "none";
        drop3.display = "none";
        drop5.display = "none";
    }
}
function show5() {
    if (drop5.display == "block") {
        drop5.display = "none";
    }
    else {
        drop5.display = "block";
        drop1.display = "none";
        drop2.display = "none";
        drop3.display = "none";
        drop4.display = "none";
    }
}

const images = document.querySelectorAll(".imgcont img")
let i = 0;
let j = images.length;

function nextbtn() {
    document.getElementById("image" + (i + 1)).classList.remove("active");
    i = ((j + i) + 1) % j;
    document.getElementById("image" + (i + 1)).classList.add("active");
}

function prebtn() {
    document.getElementById("image" + (i + 1)).classList.remove("active");
    i = ((j + i) - 1) % j;
    document.getElementById("image" + (i + 1)).classList.add("active");
}

function setActive(id) {
    ['image4', 'image5', 'image6'].forEach(elementId => {
        const element = document.getElementById(elementId);
        element.classList.toggle('active', elementId == id);
    });
}

function home() {
    setActive('image4');
}

function service() {
    setActive('image5');
}

function contact() {
    setActive('image6');
}

function setActive1(id) {
    ['box1', 'box2', 'box3', 'box4', 'box5'].forEach(elementId => {
        const element = document.getElementById(elementId);
        element.classList.toggle('active', elementId === id);
    });
}

function coffee() {
    setActive1('box1');
}

function drink() {
    setActive1('box2');
}

function fastfood() {
    setActive1('box3');
}

function tea() {
    setActive1('box4');
}

function allItems() {
    console.log("clicked");
    setActive1('box5');
}


var pattern = /\s/g;
var pattern2 = '@';

function uemail1() {
    var mail = document.getElementById("email1").value


    if (mail.match(pattern)) {
        document.getElementById("err1").innerHTML = "**White Space Are not allowed in E-mail"
        return false;
    }
    if (mail.length == 0) {
        document.getElementById("err1").innerHTML = "**Please Enter Email-id";
        return false;
    }

    if (mail.indexOf('@') == 0) {
        document.getElementById("err1").innerHTML = "** '@' Can not at be at first Index! ";
        return false;
    }

    if ((mail.length < 8) || (mail.length > 25)) {
        document.getElementById("err1").innerHTML = "*length should be between 8 and 25";
        return false;
    }

    if (!mail.match(pattern2)) {
        document.getElementById("err1").innerHTML = "*@ is important";
        return false;
    }

    document.getElementById("err1").innerHTML = "";
    return true;
}

function upassword1() {

    var pass = document.getElementById("password1").value
    
       
    if(pass.match(pattern)){
    document.getElementById("err1").innerHTML="**White Space Are not allowed in Password"
    return false;
    }
    
    if(pass==""){
    document.getElementById("err1").innerHTML="** Please Fill The Password";
    return false;
    }
       
    if((pass.length < 8)||(pass.length > 15)){
    document.getElementById("err1").innerHTML="*password should have Atleast 8 Character";
    return false;
    }   
    
    document.getElementById("err1").innerHTML="";
    return true;
    }

    function validateForm1(){
        if (!uemail1() || !upassword1()) {
            document.getElementById("err1").innerHTML = "*Please fill all above details"
            return false;
            }
    }






function uname() {
    var username = document.getElementById("name").value

    if (username == "") {
        document.getElementById("err").innerHTML = "*Invalid Name";
        return false;
    }

    if ((username.length < 3) || (username.length > 15)) {
        document.getElementById("err").innerHTML = "*length should be between 3 and 15";
        return false;
    }

    document.getElementById("err").innerHTML = "";
    return true;
}

var pattern = /\s/g;
var pattern2 = '@';

function uemail() {
    var mail = document.getElementById("email").value


    if (mail.match(pattern)) {
        document.getElementById("err").innerHTML = "**White Space Are not allowed in E-mail"
        return false;
    }
    if (mail.length == 0) {
        document.getElementById("err").innerHTML = "**Please Enter Email-id";
        return false;
    }

    if (mail.indexOf('@') == 0) {
        document.getElementById("err").innerHTML = "** '@' Can not at be at first Index! ";
        return false;
    }

    if ((mail.length < 8) || (mail.length > 25)) {
        document.getElementById("err").innerHTML = "*length should be between 8 and 25";
        return false;
    }

    if (!mail.match(pattern2)) {
        document.getElementById("err").innerHTML = "*@ is important";
        return false;
    }

    document.getElementById("err").innerHTML = "";
    return true;
}

function upassword() {

    var pass = document.getElementById("password").value
    
       
    if(pass.match(pattern)){
    document.getElementById("err").innerHTML="**White Space Are not allowed in Password"
    return false;
    }
    
    if(pass==""){
    document.getElementById("err").innerHTML="** Please Fill The Password";
    return false;
    }
       
    if((pass.length < 8)||(pass.length > 15)){
    document.getElementById("err").innerHTML="*password should have Atleast 8 Character";
    return false;
    }   
    
    document.getElementById("err").innerHTML="";
    return true;
    }

function validateForm(){
    if (!uname() || !uemail() || !upassword()) {
        document.getElementById("err").innerHTML = "*Please fill all above details"
        return false;
        }
}
