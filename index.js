var username1 = $('#username1');
var password1 = $('#password1');
var cpassword1 = $('#cpassword1');
var email1 = $('#email1');

var usernameLogin = $('#username');
var passwordLogin = $('#password');

var noticeMsg = $('#noticeMsg');
$(document).ready(function() {
    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
            return (false)
    }
    function ValidatePassword(pass){
        if(pass.length > 6){
            return false;
        }
        return true;
    }
    function ValidateCPassword(pass,cpass){
        if(pass === cpass){
            return true;
        }
        return false;
    }
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

        if(!ValidatePassword(password)){
            noticeMsg.html(`
                <div class="alert alert-danger" role="alert">
                    Password phải trên 6 ký tự
                </div>
            `);
            return;
        }
        if(!ValidateEmail(email)){
            noticeMsg.html(`
                <div class="alert alert-danger" role="alert">
                    Email không đúng định dạng
                </div>
            `);
            return;
        }
        
        const found = existingUser.find(element => element.username == user.username);
        if(found){
            noticeMsg.html(`
                <div class="alert alert-danger" role="alert">
                    Tài khoản đã tồn tại
                </div>
            `);
        }
        else if(!ValidateCPassword(password,cpassword)){
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
        e.preventDefault(); 
        const username = usernameLogin.val();
        const password = passwordLogin.val();
        var user = {
            username,
            password
        }
        if(!ValidatePassword(password)){
            noticeMsg.html(`
                <div class="alert alert-danger" role="alert">
                Password phải trên 6 ký tự
                </div>
            `);
            return;
        }
        
        var existingUser = JSON.parse(localStorage.getItem("userList"));
        console.log(username,password);
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
        
       
    });
})