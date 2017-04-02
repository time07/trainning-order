app.factory("pedidoService", pedidoService);

function pedidoService(){
    var pedidos = [];

    function getPedidos(){
        return pedidos;
    }

    function savePedido(pedido){  
        pedidos.push(pedido);
    }

    return {
        getPedidos: getPedidos,
        savePedido: savePedido
    }
}