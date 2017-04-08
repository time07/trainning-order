app.controller('pedidoController', pedidoController);

function pedidoController($scope, $location, pedidoService, produtoService) {
    $scope.pedido;
    $scope.gravarItem = gravarItem;
    $scope.novoProduto;
    $scope.getProduto = getProduto;
    getListaDePedido();


    function getListaDePedido() {
        $scope.listaDePedido = pedidoService.getListaDePedido();
    }

    function gravarItem(produto) {
        pedidoService.gravarItem(produto);
    }

    function getProduto(codigoProduto) {
        debugger;
        $scope.novoProduto  = produtoService.getByCode(codigoProduto);
     
    }
}