app.factory('produtoService', produtoService);

function produtoService() {
    var listaDeProduto = [];
    var produtoEdit = {};
    var produtoEditIndex;

    function save(produto) {
        listaDeProduto.push(produto);
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

    function getByCode(codigoProduto){
        for(var p in listaDeProduto){
            if(listaDeProduto[p].codigo === codigoProduto){
                return listaDeProduto[p];
            }
        }
    }

    return {
        save: save,
        remove: remove,
        edit: edit,
        saveEdit: saveEdit,
        getByCode : getByCode,
        getProdutoEdit: getProdutoEdit,
        getListaDeProduto: getListaDeProduto
    }
}