function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        var inicioValor = Number(inicio.value)
        var fimValor = Number(fim.value)
        var passoValor = Number(passo.value)
        if (passoValor <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1.')
            passoValor = 1
        }
        if (inicioValor < fimValor) {
            for(var c = inicioValor; c <= fimValor; c += passoValor) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(var c = inicioValor; c >= fimValor; c -= passoValor) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
