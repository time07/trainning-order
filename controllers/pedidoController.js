app.controller('pedidoController', pedidoController);

function pedidoController($scope, $location, pedidoService){
    getListaDePedido();
    
    function getListaDePedido(){
        $scope.listaDePedido = pedidoService.getListaDePedido();
    }
}