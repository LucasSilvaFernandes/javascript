function contar(){
    var n1 = document.querySelector('input#inicio')
    var n2 = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

   if(n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0){
    alert('[ERRO] Faltam dados!')
   } else {
    res.innerHTML=('contando:')
    let i = Number(n1.value)
    let f = Number(n2.value)
    let p = Number(passo.value)

    if(i < f){
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c}\u{1F449} `
        }
     
    }else{
        for(let c =i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1f449}`
        }
        
    }
    res.innerHTML += `\u{270B}`
    
    
   }
   
}


