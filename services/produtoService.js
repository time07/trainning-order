app.factory("produtoService", produtoService);

function produtoService() {
    var listaDeProduto = [];
    var editProduto = {}; 

    function save(produto) {
        listaDeProduto.push(produto);
        console.log(listaDeProduto);
    }

    function remove(idProduto) {
        listaDeProduto.splice(idProduto, 1);
    }

    function edit(idProduto) {
        editProduto = listaDeProduto[idProduto];
    }

    function getLista() {
        return listaDeProduto;
    }

    return {
        save: save,
        remove : remove,
        edit : edit,
        getLista : getLista
    }
}