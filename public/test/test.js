function delay(date) {
    var time = Date.now();
    while (Date.now() - time < date) {
    }
}
// delay(3000);
window.getName = ()=>{
    console.log('name')
}