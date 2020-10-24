// implentar frase aleatória
$("#botao-frase").click(fraseAleatoria)

    function fraseAleatoria(){
        $.get("http://localhost:3000/frases", trocaFrase) // o get faz uma requisição para a página informada e, em seguida, executa a função.
    };

   function trocaFrase(data){ 
        var frase = $(".frase");
        var numeroAleatorio = Math.floor(Math.random()*data.length);
         
        frase.text(data[numeroAleatorio].texto);

   };
