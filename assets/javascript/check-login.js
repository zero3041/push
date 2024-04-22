const check = window.localStorage.getItem('user');

if(!check) window.location.href = "index.php";