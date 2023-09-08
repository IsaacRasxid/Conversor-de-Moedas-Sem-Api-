function pegaquantidade(){
    let quantidade = document.querySelector("#DinheiroReal").value;
    return quantidade;
}

function pegamoeda(){
    let moeda = document.querySelector("#moeda").value;
    return moeda;
}


function substituirVirgulaPorPonto(input) {
    let valor = input.value;

    valor = valor.replace(/,/g, '.');
    
    input.value = valor;
}

function converte() {
    let quantidade = pegaquantidade();
    let moeda = pegamoeda();
    let valor;

    switch (moeda) {
        case "$":
            valor = quantidade * 0.20;
            valor = valor.toFixed(2)
            valor = `$${valor}`
            break;
        case "EUR":
            valor = quantidade * 0.19;
            valor = valor.toFixed(2)
            valor = `€${valor}`
            break;
        case "LIB":
            valor = quantidade * 0.16;
            valor = valor.toFixed(2)
            valor = `£${valor}`
            break;
        case "BTC":
            valor = quantidade * 0.0000078;
            valor = valor.toFixed(6)
            valor = `฿${valor}`
            break;
    }

    document.querySelector("#resultado").value = valor;
}
