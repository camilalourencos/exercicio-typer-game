var tempoInicial = $("#tempo-digitacao").text();
var campoDigitacao = $(".area-digitacao");  

$(document).ready(function(){
    atualizaTamanhoFrase()
    contador();
    cronometroIniciar()
    botaoReiniciar();

})


function atualizaTamanhoFrase(){
    var frase = $(".frase").text(); //o .text retorna o conteúdo de uma tag
    var numPalavras = frase.split(" ").length;
    var tamFrase = $("#tamanho-frase");
    tamFrase.text(numPalavras);

}

function contador (){
    campoDigitacao.on("input",function(){
        var conteudo = campoDigitacao.val(); // o .val retorna o valor de um input
    
        var qtdPalavras = conteudo.split(/\S+/).length -1; //a expressão regular \S+ corresponde a qualquer caracter que não seja um espaço em branco repetido
        $("#contador-palavra").text(qtdPalavras);
    
        var qtdCaracter = conteudo.length; 
        $("#contador-caracter").text(qtdCaracter);
    });

}


function cronometroIniciar(){
    var tempoRestante = $("#tempo-digitacao").text();
    campoDigitacao.one("focus",function(){ //a função .one serve para chamar o evento apenas uma vez
    var cronometro = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);

        if (tempoRestante <1) {
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
                
    },1000);
});
}

function botaoReiniciar(){
    $("#botao-reiniciar").click(function(){

        campoDigitacao.attr("disabled", false);
        campoDigitacao.val("");
        $("#contador-caracter").text("0");
        $("#contador-palavra").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        cronometroIniciar();
    
    }); 

}





 
 