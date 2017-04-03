app.factory('produtoService', produtoService);

function produtoService() {
    var listaDeProduto = [];
    var produtoEdit = {};
    var produtoEditIndex;

    function save(produto) {
        if (parseInt(produto.codigo) && parseFloat(produto.preco)) {
            listaDeProduto.push(produto);
        } else {
            return false;
        }
        return true;
    }

    function saveEdit(produto) {
        listaDeProduto.splice(produtoEditIndex, 1, produto);
    }

    function remove(index) {
        listaDeProduto.splice(index, 1);
    }

    function edit(index) {
        produtoEdit = listaDeProduto[index];
        produtoEditIndex = index;
    }


    function getListaDeProduto() {
        return listaDeProduto;
    }

    function getProdutoEdit() {
        return {
            codigo: produtoEdit.codigo, descricao: produtoEdit.descricao, preco: produtoEdit.preco
        }
    }

    return {
        save: save,
        remove: remove,
        edit: edit,
        saveEdit: saveEdit,
        getProdutoEdit: getProdutoEdit,
        getListaDeProduto: getListaDeProduto
    }
}