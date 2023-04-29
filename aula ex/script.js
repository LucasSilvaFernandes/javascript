function carregar(){
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var data = new Date()
    var hora = 2
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia
         foto.src ="pexels/pexels-tom-fisk-2278543.jpg";
         document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        foto.src ="pexels/pexels-reynaldo-brigworkz-brigantty-771883.jpg";
        document.body.style.background = 'blue'
    }else{
        //Boa noite
        foto.src = 'pexels/pexels-anderson-martins-2386144.jpg';
        document.body.style.background = 'black'
    }
    
}

document.onload = carregar()


