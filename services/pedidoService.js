app.factory("pedidoService",pedidoService)

function pedidoService(){
	pedidos = [];

	function inserirPedido(pedido){
		pedidos.push(pedido);
	}
	function consultarPedido(){
		return pedidos;
	}

	function removerPedido(index){
		for (var i = index; i >= 0; i--) {
			pedidos[i]
		}
	}
	return{
		inserirPedido: inserirPedido,
		consultarPedido: consultarPedido,
		removerPedido:removerPedido
	}
}