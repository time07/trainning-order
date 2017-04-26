app.controller("pedidoController",pedidoController)

function pedidoController($scope,$location,pedidoService){
	$scope.pedido = {};
	$scope.listaDePedidos= [];

	$scope.inserirPedido =
	function inserirPedido(pedido){
		pedidoService.inserirPedido(pedido);
	} 
	$scope.consultarPedido =
	function consultarPedido(){
		$scope.listaDePedidos = pedidoService.consultarPedido();
	}

	$scope.removerPedido = 
	function pedidoService.removerPedido(index){
		pedidoService.removerPedido(index);
	}
}