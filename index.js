var username1 = $('#username1');
var password1 = $('#password1');
var cpassword1 = $('#cpassword1');
var email1 = $('#email1');

var usernameLogin = $('#username');
var passwordLogin = $('#password');
$(document).ready(function() {
    $('#register').on('click', function(e) {
        const username = username1.val();
        const password = password1.val();
        const cpassword = cpassword1.val();
        const email = email1.val();

        var user = {
            username,
            password,
            cpassword,
            email
        }

        var existingUser = JSON.parse(localStorage.getItem("userList"));
        if(existingUser == null) existingUser = [];
        
        const found = existingUser.find(element => element.username == user.username);
        if(found){
            alert('Tài khoản tồn tại')
        }
        else if(password !== cpassword){
            alert('Không trùng mật khẩu')
        }
        else{
            existingUser.push(user);
            localStorage.setItem("userList", JSON.stringify(existingUser));
            alert('Đăng ký thành công')
        }
        e.preventDefault();
       
    });
    $('#login').on('click', function(e) {
        const username = usernameLogin.val();
        const password = passwordLogin.val();
        var user = {
            username,
            password
        }
        var existingUser = JSON.parse(localStorage.getItem("userList"));
        const found = existingUser.find(element => element.username == user.username && element.password == user.password);
        if(found){
            alert('Đăng nhập thành công');
        }
        else{
            alert("Đăng nhập thất bại");
        }
        e.preventDefault();
       
    });
})