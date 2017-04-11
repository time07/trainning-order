app.factory("produtoService", produtoService);

function produtoService(){
    var produtos = [];
    
    function getProdutos(){
        return produtos;
    }

    function getByCode(codigo) {
        var data;
        for (var produto in produtos) {
            if (produtos[produto].codigo === codigo) {
                data = produtos[produto];
            }
        }
        return data;
    }

    function saveProduto(produto){  
        produtos.push(produto);
    }

    function edit(produto) {
        for (var produto in produtos) {
            if (produtos[produto].codigo === produto.codigo) {
                produtos[produto] = angular.copy(produto);
            }
        }
        return true;
    }

    function remove(index) {
        produtos.splice(index, 1);
    }    

    return {
        getProdutos: getProdutos,
        getByCode: getByCode,
        saveProduto: saveProduto,
        edit: edit,
        remove: remove
    }
}