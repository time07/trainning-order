app.factory("produtoService", produtoService);

function produtoService(){
    var produtos = [];
    var copiaProduto = "";

    function getProdutos(){
        return produtos;
    }

    function getProduto(id) {
        copiaProduto = angular.copy(produtos[id]);
        return copiaProduto;
    }

    function saveProduto(produto){  
        produtos.push(produto);
    }

    function remove(idProduto) {
        produtos.splice(idProduto, 1);
    }

    return {
        getProdutos: getProdutos,
        getProduto: getProduto,
        saveProduto: saveProduto,
        remove: remove
    }
}