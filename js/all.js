
var send = document.querySelector('.send');

send.addEventListener('click',signup,false);
var xhr = new XMLHttpRequest();

function signup(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;
    
    
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function(){
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var veriStr =  callbackData.message;
        if(veriStr =="登入成功"){
            alert('登入成功');
        }else{
            alert("登入失敗");
        }
    }
}