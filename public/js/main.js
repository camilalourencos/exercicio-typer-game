var tempoInicial = $("#tempo-digitacao").text();
var campoDigitacao = $(".area-digitacao");  

$(document).ready(function(){
    atualizaTamanhoFrase();
    contador();
    cronometroIniciar();
    botaoReiniciar();
    bordaDigitacao();
    novoJogador();
    $('.tooltip').tooltipster({
        trigger: "custom"
    });


})

function atualizaTamanhoFrase(){
    var frase = $(".frase").text(); //o .text retorna o conteúdo de uma tag
    var numPalavras = frase.split(" ").length;
    var tamFrase = $("#tamanho-frase");
    tamFrase.text(numPalavras);

}

function atualizaTempoInicial (tempo){  
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
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
    campoDigitacao.one("focus",function(){ //a função .one serve para chamar o evento apenas uma vez  
        var tempoRestante = $("#tempo-digitacao").text(); 
        $("#botao-reiniciar").attr("disabled", true);
        var cronometro = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);

            if (tempoRestante <1) {
                clearInterval(cronometro);
                finalizaJogo();

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

function finalizaJogo(){
    campoDigitacao.attr("disabled",true);
    $("#botao-reiniciar").attr("disabled", false);
    campoDigitacao.toggleClass("campo-desativado");
    inserePlacar();
}

function bordaDigitacao(){
    campoDigitacao.on("input", function(){
        var frase = $(".frase").text();
        var digitado = campoDigitacao.val();
        var comparavel = frase.substr(0, digitado.length); //substring - compara o que foi um pedaço da frase com o que foi digitado.

        if(digitado == comparavel){
            campoDigitacao.addClass("campo-correto");
            campoDigitacao.removeClass("campo-errado");
        }else{
            campoDigitacao.addClass("campo-errado");
            campoDigitacao.removeClass("campo-correto");
        }

    })

}

function botaoReiniciar(){
    $("#botao-reiniciar").click(function(){
        campoDigitacao.attr("disabled", false);
        campoDigitacao.val("");
        $("#contador-caracter").text("0");
        $("#contador-palavra").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        cronometroIniciar();
        campoDigitacao.removeClass("campo-desativado");
        campoDigitacao.removeClass("campo-errado");
        campoDigitacao.removeClass("campo-correto");
        $(".placar").stop().slideToggle(700);
    }); 
}






 
 