function foo(){
    console.log(5);
}
foo();

function a(i){
    if(i == 2){
        console.log(true);
    }
}

function b(n){
    for(var i = 0; i < n; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

function c(n){
    var inc = 0;
    while(inc < n){
        if(inc % 2 != 0){
            console.log(inc);
        }
        inc++;
    }
}

function d(n){
    var storage = [];
    for(r = 0; r < n; r++){
        storage[r] = r;
    }
    return storage;
}

function e() {
    var obj = {a: 1, b:2, c:3};

    for(var key in obj) {
        var value = obj[key];
        console.log(value);
    }
}

function f(a){
    for(var i = 0; i < a.length; i++){
        if(a[i] == target) break;
    }
}

function j(){
    var matrix = getData();
    var sum = 0, success = false;
    compute_sum: if (matrix){
        for(var x = 0; x < matrix.length; x++){
            var row = matrix[x];
            if(!row) break compute_sum;
            for(var y = 0; y < row.length; y++){
                var cell = row[y];
                if(isNaN(cell)) break compute_sum;
                sum += cell;
            }
        }
        success = true;
    }
}

function h(data){
    for(i = 0; i < data.length; i++){
        if(!data[i]) continue;
        total +=data[i];
    }
}

function factorial(x){
    if(x < 0) throw new Error("x не может быть отрицательным");
    for(var f = 1; x > 1; f *= x, x--){
        return f;
    }
}

function g(){
    try{
        var n = Number(prompt("Введите положительное число", ""));
        var f = factorial(n);
        alert(n + "!= " + f);
    }
    catch(ex){
        alert(ex);
    }
}

function square(x){
    return x * x;
}
square(2);

function tail(o){
    for(; o.next; o = o.next) /* пустое */;
    return o;
}

function t(){
    var i, j;
    for(i = 0, j = 10; i < 10; i++, j--){
        sum += i * j;
    }
}

function printArray(a){
    var len = a.length, i = 0;
    if(len == 0){
        console.log("Пустой массив");
    }
    else{
        do{
            console.log(a[i]);
        }while(++i < len);
    }
}

function u(){
    var count = 0;
    while(count < 10){
        console.log(count);
        count++;
    }
}

function convert(x){
    switch (typeof x){
        case 'number':
            return x.toString(16);
        case 'string':
            return '"' + x + '"';
        default:
            return x.toString();
    }
}

function hypotenuse(x, y){
    return Math.sqrt(x * x + y * y);
}

function factor(n){   //рекурсивная функция
    if(n <= 1) return 1;
    return n * factor(n - 1);
}

function test(o){
    var i = 0;
    if(typeof o == "object"){
        var j = 0;
        for(var k = 0; k < 10; k++){
            console.log(k);
        }
        console.log(k);
    }
    console.log(j);
}

function p(){
    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}


var scop = "global";
function checkscop(){
    var scop = "local";
    return scop;
}
checkscop();


function equalArrays(a, b){
    if(a.length != b.length) return false;
    for(var i = 0; i < a.length; i++){
        if(a[i] != b[i]) return false;
        return true;
    }
}

function debug(msg){
    var log = $("#debuglog");
    if(log.length == 0){
        log = $("<div id='debuglog'><h1>Debug Log</h1></div>>");
        log.appendTo(document.body);
    }
    log.append($("<pre/>").text(msg));
}

function hide(e, reflow){
    if(reflow){
        e.style.display = "none"
    }
    else{
        e.style.visibility = "hidden";
    }
}


function highligh(e){
    if(!e.className) e.className = "hilite";
    else e.className += " hilite";
}

function debug(msg){
    var log = document.getElementById("debuglog");
    if(!log){
        log = document.createElement("div");
        log.id = "debuglog";
        log.innerHTML = "<h1>Debug Log</h1>>";
        document.body.appendChild(log);
    }
    var pre = document.createElement("pre");
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
}


function Point(x, y){
    this.x = x;
    this.y = y;
}
var p = new Point(1, 1);
Point.prototype.r = function(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
p.r();



function abs(x){
    if(x >= 0){
        return x;
    }
    else{
        return -x;
    }
}

function factorial(n){
    var product = 1;
    while(n > 1){
        product *= n;
        n--;
    }
    return product;
}
factorial(4);


function factorial2(n){
    var i, product = 1;
    for(i = 2; i <= n; i++){
        product *= i;
        return product;
    }
}
factorial2(5);

