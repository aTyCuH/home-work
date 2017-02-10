function read(id) {
    return +(document.getElementById(id).value);
}
function USD() {
    const USD = 27;
    var UAH_USD = read ('first') / USD;
    document.getElementById('result').innerHTML = UAH_USD.toFixed(2);
}
function EUR() {
    const EUR = 34;
    var UAH_EUR = read ('first') / EUR;
    document.getElementById('result').innerHTML = UAH_EUR.toFixed(2);
}