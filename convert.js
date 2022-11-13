
function converter(){
    console.log('string');
    var valorElemento = document.getElementById("valorDolar");
    var valor = valorElemento.value;
    var valorDoDolar =  parseFloat(valor);

    var valorDolarReal= valorDoDolar*5;
    var elementoDolarConvertido = document.getElementById("valorConvertidoDolar");
    var valorConvertido = "o resultado em real é R$" + valorDolarReal;
    elementoDolarConvertido.innerHTML = valorConvertido;


}


