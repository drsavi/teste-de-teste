
function AtualizarVlrProduto1(){
    document.getElementById('vlrproduto1').value =   parseFloat(document.getElementById('qtdproduto1').value) *
                                                     parseFloat('5000');
}

function AdicionarQuantidadeProduto1(){
    document.getElementById('qtdproduto1').value = parseFloat(document.getElementById('qtdproduto1').value) + 1;
    AtualizarVlrProduto1();
}

