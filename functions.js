function practice2_color() {
    var bor_R = document.getElementById("bor_R").value;
    var bor_G = document.getElementById("bor_G").value;
    var bor_B = document.getElementById("bor_B").value;
    var width = document.getElementById("width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var doc = document.getElementById("paragraph");
    doc.style.borderColor = `rgb(${bor_R},${bor_G},${bor_B})`;
    doc.style.borderWidth = width
    doc.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}

function validate_pass() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1.length < 8) {
        alert("The length of the first password is less than 8 letters!");
    }
    else if (password2.length < 8) {
        alert("The length of the Second password is less than 8 letters!");
    }
    else if (password1 != password2) {
        alert("Two passwords don't match!");
    }
    else {
        alert("Everything is good!");
    }

}