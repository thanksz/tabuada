function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        errinho.innerHTML = 'error'

}else{   
    var n = Number(num.value)
    var c = 1
    tab.innerHTML =''
    errinho.innerHTML = ''
    while (c <=10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`  
        tab.appendChild(item)
        c++
    }
 }

}