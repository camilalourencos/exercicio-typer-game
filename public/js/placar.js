$("#botao-placar").click(function(){
    mostrarPlacar();
})

$("#botao-sync").click(function(){
    sincronizarPlacar();
})

function inserePlacar (){
    var corpoTabela = $(".placar").find("tbody");
    var usuario =  "Camila"
    var numeroPalavras = $("#contador-palavra").text();  

    var linha = novaLinha(usuario, numeroPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
    
    $(".placar").slideDown(500);
    scrollPlacar();

}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href","#")
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    
    return linha;
}

function removeLinha (event){
    event.preventDefault();
    var linha = $(this).parent().parent()
    linha.fadeOut();
    setTimeout(function(){
        linha.remove();
    },1000)
        
}  

function mostrarPlacar(){
    $(".placar").stop().slideToggle(700); //o elemento aparece com mais suavidade
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("html, body").animate(
        {
            scrollTop: posicaoPlacar
        }, 1000)
}

function sincronizarPlacar(){
     var placar = [];
     var linhas = $("tbody>tr");

     linhas.each(function(){
         var usuario = $(this).find("td:nth-child(1)").text();
         var palavras = $(this).find("td:nth-child(2)").text();

         var score = {
             usuario: usuario,
             pontos: palavras
         }

         placar.push(score);
     });
     var dados ={
         placar: placar
     }
     $.post("http://localhost:3000/placar",dados,function(){
        console.log("salvou os dados no servidor");
     })
}
