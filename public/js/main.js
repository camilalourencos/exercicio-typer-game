var frase = $(".frase").text(); //o .text retorna o conteúdo de uma tag
var numPalavras = frase.split(" ").length;
var tamFrase = $("#tamanho-frase");
tamFrase.text(numPalavras);

var campoDigitacao = $(".area-digitacao");  

campoDigitacao.on("input",function(){
    var conteudo = campoDigitacao.val(); // o .val retorna o valor deum input

    var qtdPalavras = conteudo.split(/\S+/).length -1; //a expressão regular \S+ corresponde a qualquer caracter que não seja um espaço em branco repetido
    $("#contador-palavra").text(qtdPalavras);

    var qtdCaracter = conteudo.length; 
    $("#contador-caracter").text(qtdCaracter);
});

    


var tempo = $("#tempo-digitacao").text();
campoDigitacao.one("focus",function(){ //a função .one serve para chamar o evento apenas uma vez
    var cronometro = setInterval(function(){
        tempo--;
        $("#tempo-digitacao").text(tempo);

        if (tempo <1) {
            campoDigitacao.attr("disabled",true);
            clearInterval(cronometro);
        }                
        /* if (tempo > 0) {
            tempo--;
            $("#tempo-digitacao").text(tempo);
            
        }else {
            campoDigitacao.attr("disabled",true); 
            $("#tempo-digitacao").text("0");
        }*/         
                
    },1000)
})

console.log(tempo);

 
 