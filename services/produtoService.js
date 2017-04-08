app.factory("produtoService", produtoService);

function produtoService() {
    var listaDeProduto = [];
    var editProduto = {};
    var editIndex;

    function save(produto) {
        listaDeProduto.push(produto);
    }

    function remove(idProduto) {
        listaDeProduto.splice(idProduto, 1);
    }

    function edit(idProduto) {
        editProduto = listaDeProduto[idProduto];
        editIndex = idProduto;
    }

    function getLista() {
        return listaDeProduto;
    }

    function getEditProduto() {
        return {
            codigo : editProduto.codigo,
            descricao : editProduto.descricao,
            preco : editProduto.preco
        }
    }

    function saveEdit(produto) {
        listaDeProduto.splice(editIndex, 1, produto);
    }

    return {
        save: save,
        remove : remove,
        edit : edit,
        getLista : getLista,
        getEditProduto : getEditProduto,
        saveEdit : saveEdit
    }
}