//€
var Valor_preço_total = 0
var quantidade = 0
var Mostrar_valor_total = document.getElementById("notification")
var Compra_cheats = Array.from(document.getElementsByClassName("buy-button"))

Compra_cheats.forEach(cheat => {                //adiciona um addEventListener a todos os elementos da classe "buy-button"
    cheat.addEventListener("click", () => {
        var nome_cheat = cheat.classList[1];    //usando index, acaba retornando o nome da segunda class do elemento
        var notification = document.getElementById("notification").style.display = "block";
        switch (nome_cheat) {
            case "OT2-button":
                Valor_preço_total += 5
                break;
            case "OT3-button":
                Valor_preço_total += 7
                break;
            case "OT4-button":
                    Valor_preço_total += 10
                    break;
            case "AW-button":
                    Valor_preço_total += 15
                    break;
            case "GS-button":
                    Valor_preço_total += 18
                    break;
            case "NL-button":
                    Valor_preço_total += 20
                    break;
        }
        quantidade++
        Mostrar_valor_total.innerHTML = "Itens: " + quantidade

    })
})


