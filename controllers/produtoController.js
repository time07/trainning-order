app.controller('produtoController', produtoController);

function produtoController($scope, $location, produtoService) {
    $scope.produto = {};
    $scope.save = save;
    $scope.edit = edit;
    $scope.remove = remove;
    $scope.saveEdit = saveEdit;
    getListaDeProduto();
    getProdutoEdit();

    function save(produto) {
        if(parseInt(produto.codigo) && parseFloat(produto.preco)){
             produtoService.save(produto);
             $location.path("produto");
        }else{
            alert("Codigo ou Preço invalido!");
        }
    }

    function saveEdit(produto){
        produtoService.saveEdit(produto);
        $location.path("produto");
    }

    function edit($index) {
        produtoService.edit($index);
        $location.path("produto/edit")
    }

    function remove($index) {
        produtoService.remove($index);
    }

    function getListaDeProduto() {
        $scope.listaDeProduto = produtoService.getListaDeProduto();
    }

    function getProdutoEdit() {
        if ($location.url() === '/produto/edit') {
            $scope.produto = produtoService.getProdutoEdit();
        }
    }
}