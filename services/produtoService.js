app.factory("produtoService", produtoService);

function produtoService(){
    var produtos = [];

    function getProdutos(){
        return produtos;
    }

    function saveProduto(produto){  
        produtos.push(produto);
    }

    return {
        getProdutos: getProdutos,
        saveProduto: saveProduto
    }
}