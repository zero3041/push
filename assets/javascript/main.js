// Login
var users = [
    { username: "admin", password: "admin" },
    { username: "john", password: "1234" }
];

$(document).ready(function() {
    toastr.options = {
        'closeButton': true,
        'debug': false,
        'newestOnTop': false,
        'progressBar': false,
        'positionClass': 'toast-top-right',
        'preventDuplicates': false,
        'showDuration': '1000',
        'hideDuration': '1000',
        'timeOut': '5000',
        'extendedTimeOut': '1000',
        'showEasing': 'swing',
        'hideEasing': 'linear',
        'showMethod': 'fadeIn',
        'hideMethod': 'fadeOut',
    }
});

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password
    };

    $.ajax({
        type: "POST",
        url: "login.php",
        data: data,
        dataType: "json",
        success: function(response) {
            if (response.success) {
                window.localStorage.setItem('user', username);
                window.location.href = "view/dashboard.php";
            } else {
                toastr.error(response.message);
            }
        },
        error: function(xhr, status, error) {
            console.error("Lỗi Ajax: " + status + " - " + error);
        }
    });
}


// menu nav mobile

function openMenu(){
    document.getElementsByClassName("menu").menu.style.display='none';
    document.getElementById("header").style.width = "45%"
    document.getElementById("sidebar").style.width = "45%"
}


document.addEventListener("click", function(evt) {
    const sidebar = document.getElementById("sidebar")
    const header= document.getElementById("menu")

    if(evt.target !== sidebar && evt.target !==header  && !sidebar.contains(evt.target)&& !header.contains(evt.target)) {
        if(document.getElementById('menu').style.display === "none")
        {
            document.getElementsByClassName("menu").menu.style.display='block';
            document.getElementById("header").style.width = null
            document.getElementById("sidebar").style.width = null
        }

    }
});