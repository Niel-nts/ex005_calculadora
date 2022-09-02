function calculo(){
    var num1 = document.getElementById('txtnum1')
    var num2 = document.getElementById('txtnum2')    
    var res = document.getElementById('res')
    if (Number(num1.value)<1 || num1.value.length == 0 || Number(num2.value)<1 || num2.value.length == 0){
        window.alert('Por favor digite números inteiros positivos!')
    } else {                    
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var op = document.getElementsByName('opera')        
        if (op[0].checked){            
            res.innerHTML = `O resultado da soma entre ${n1} e ${n2} é igual a ${n1+n2}`        
        } else if (op[1].checked){
            res.innerHTML = `O resultado da subtração entre ${n1} e ${n2} é igual a ${n1-n2}`        
        } else if (op[2].checked){
            res.innerHTML = `O resultado da multiplicação entre ${n1} e ${n2} é igual a ${n1*n2}`        
        } else {
            res.innerHTML = `O resultado da divisão entre ${n1} e ${n2} é igual a ${n1/n2}`        
        }
        
    }
}