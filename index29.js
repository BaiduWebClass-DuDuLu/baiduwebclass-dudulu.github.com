var myName = document.getElementById('myName');
var msg = document.getElementById('msg');
var validator = document.getElementById('validator');

var GetLength = function(str)
{
    var realLength = 0;
    for (var i = 0; i < str.length; i++)
    {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128)
        realLength += 1;
        else
        realLength += 2;
    }
    return realLength;
};

validator.onclick=function validate() {
    var namemsg = myName.value;
    if(GetLength(namemsg) == null){
        msg.innerHTML = '姓名不能为空';
        msg.style.color = 'red';
        myName.style.border = '2px solid red';
    }
    else if(GetLength(namemsg) >= 4 && GetLength(msg) <= 16){
        msg.innerHTML = '格式正确';
        msg.style.color = 'lightgreen';
        myName.style.border = '2px solid lightgreen';
    }
    else {
        msg.innerHTML = '字符数应为4~16位';
        msg.style.color = 'red';
        myName.style.border = '2px solid red';
    }
}