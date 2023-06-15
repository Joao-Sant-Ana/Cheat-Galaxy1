//€
var cheats = ["Onetap v2", "Onetap v3", "Onetap v4", "Neverlose", "Gamesense", "Aimware"] //Cheats disponiveis pra compra
var Valor_preço_total = 0
var Mostrar_valor_total = document.getElementById("total_price")
var Compra_cheats = Array.from(document.getElementsByClassName("cheats"))



Compra_cheats.forEach(cheat => {
    cheat.addEventListener("click", () => {
        var nome_cheat = cheat.textContent
        switch (nome_cheat) {
            case "Onetap V2":
                Valor_preço_total += 5
                break;
            case "Onetap V3":
                Valor_preço_total += 7
                break;
            case "Onetap V4":
                    Valor_preço_total += 10
                    break;
            case "Aimware":
                    Valor_preço_total += 15
                    break;
            case "Gamesense":
                    Valor_preço_total += 18
                    break;
            case "Neverlose":
                    Valor_preço_total += 20
                    break;
        }
        Mostrar_valor_total.innerHTML = Valor_preço_total + "€"

    })
})

