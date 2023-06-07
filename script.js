function verificar(){
    //Variaveis
    var data = new Date ();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("txtano");
    var res = window.document.querySelector('div#res');
    
    

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique as informações e tente novamente!!");
    }else{
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - fano.value;
        var genero = "";
        var imagem = window.document.createElement("img");
        imagem.setAttribute('id','foto');
        
        
       
        if(fsex[0].checked){
            genero = "Homem"

            if (idade < 10){
                imagem.setAttribute('src','h1.jpeg');
            }else if (idade < 18){
                imagem.setAttribute('src','h2.jpeg');
            }else if (idade < 50){
                imagem.setAttribute('src','h3.jpeg');
            }else if (idade >= 50){
                imagem.setAttribute('src','h4.jpg');
            }
            
        
        }else if (fsex[1].checked){
            genero = "Mulher"

            if (idade < 10){
                imagem.setAttribute('src','m1.jpg');
            }else if (idade < 18){
                imagem.setAttribute('src','m2.jpeg');
            }else if (idade < 50){
                imagem.setAttribute('src','m3.jpeg');
            }else if (idade >= 50){
                imagem.setAttribute('src','m4.jpeg');
            }


        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado: ${genero} com ${idade} Ano(s).`;
        res.appendChild(imagem);
        
    }
   
}