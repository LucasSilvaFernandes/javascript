function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#textano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente Novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagem/bebe.menino.jpg')
            } else if(idade <= 19){
                //joven
                img.setAttribute('src', 'imagem/garoto.homem.jpg')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'imagem/adulto.homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/homem.idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade <= 10){
                //criança
            img.setAttribute('src', 'imagem/bebe.menina.jpg')
            } else if (idade <= 19){
                //joven
            img.setAttribute('src', 'imagem/garota.mulher.jpg')
            } else if (idade <= 50){
                //adulto
            img.setAttribute('src', 'imagem/adulto.mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/mulher.idosa1.jpg')
            }
        }
        
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}



