let nums = document.getElementById('nums');
let addButton = document.getElementById('add');
let _table = document.getElementById('_table');
let autoAdd = document.getElementById('auto');
let stopAdd = document.getElementById('stop');
let timer = null;
//生成乘法表
addButton.onclick = function () {
    _table.innerHTML = '';
    let val = nums.value;
    console.log(val);
    result(val);
}

//乘法表
function result(num) {
    let html = '';
    if(!num) {
        nums.blur();
        nums.value = '请输入一个值';
        return false;
    } 
    // let number = num>=0 && num <= 9 ? num : 100;
    for (let i = 1; i <= num; i++) {
        html += "<tr>";
        for (let j = 1; j <= i; j++) {

            html += "<td>" + i + "*" + j + "=" + i * j + "</td>";
        }
        html += "</tr>"

    }
    _table.innerHTML = html;
}
//自动生成
autoAdd.onclick = function () {
    let num = 0;
    timer = setInterval(() => {
        ++num;
        result(num);
    }, 900)
}
//停止生成
stopAdd.onclick = function () {
    clearInterval(timer);
}
