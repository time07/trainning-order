app.controller('pedidoController', pedidoController);

function pedidoController($scope, $location, pedidoService) {
    $scope.pedido = {};

    function salvar(pedido) {
        pedidoService.savePedido(pedido);
        $location.path('/pedidos/listagem');
    }

    function listar() {
        var pedidos = pedidoService.getPedidos();
        console.log(pedidos);
        $scope.pedidos = pedidos;
    }

    listar();

    $scope.salvar = salvar;

    $scope.adicionarProduto = function() {
        
    }
    
}