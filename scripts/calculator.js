function read(id) {
    return +(document.getElementById(id).value);
}

function add () {
    var a = read('first');
    var b = read('second');
    var add = a + ' + ' + b + ' = ' + (a + b);
    document.getElementById('result').innerHTML = add;
}
function minus () {
    var a = read('first'), b = read('second');
    var minus =  a + ' - ' + b + ' = ' + (a - b);
    document.getElementById('result').innerHTML = minus;
}
