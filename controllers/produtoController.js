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
        if (produtoService.save(produto)) {
            $location.path("produto");
        } else {
            console.log('dados invalidos');
        }
    }

    function saveEdit(produto){
        console.log("ae");
        produtoService.saveEdit(produto);
        $location.path("produto");
    }

    function edit($index) {
        produtoService.edit($index);
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