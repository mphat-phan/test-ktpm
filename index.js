var username1 = $('#username1');
var password1 = $('#password1');
var cpassword1 = $('#cpassword1');
var email1 = $('#email1');

var usernameLogin = $('#username');
var passwordLogin = $('#password');

var noticeMsg = $('#noticeMsg');
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
            noticeMsg.html(`
                <div class="alert alert-danger" role="alert">
                    Tài khoản đã tồn tại
                </div>
            `);
        }
        else if(password !== cpassword){
            noticeMsg.html(`
                <div class="alert alert-danger" role="alert">
                    Không trùng mật khẩu
                </div>
            `);
        }
        else{
            existingUser.push(user);
            localStorage.setItem("userList", JSON.stringify(existingUser));
            noticeMsg.html(`
                <div class="alert alert-success" role="alert">
                Đăng ký thành công
                </div>
            `);
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
            noticeMsg.html(`
                <div class="alert alert-success" role="alert">
                Đăng nhập thành công
                </div>
            `);
        }
        else{
            noticeMsg.html(`
                <div class="alert alert-danger" role="alert">
                Đăng nhập thất bại
                </div>
            `);
        }
        e.preventDefault();
       
    });
})