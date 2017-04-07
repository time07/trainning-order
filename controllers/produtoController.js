app.controller("produtoController", produtoController);

function produtoController($scope, produtoService, $location) {
    $scope.produto = {}; // CRIA O OBJETO COM O $SCOPE DO FORMULÁRIO
    $scope.save = save;
    $scope.remove = remove;
    $scope.edit = edit;
    getLista();

    function save(produto) {
        if (parseInt(produto.codigo) && parseFloat(produto.preco)) {
            produtoService.save(produto);
            $location.path("/produto");
        } else {
            alert("Código ou preço inválido!");
        }
    }

    function remove(idProduto) {
        produtoService.remove(idProduto);
    }

    function edit(idProduto) {
        produtoService.edit(idProduto);
        $location.path("/produto/edit");
    }

    function loadProduto() {
        $scope.produto = produtoService.edit
    }

    function getLista() {
        $scope.listaDeProdutos = produtoService.getLista();
    }
}