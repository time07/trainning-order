app.factory("pedidoService", pedidoService);

function pedidoService(){
    var pedidos = [];
    var novosPedidos = [
        {
            nome: "agua",
            quantidade: 5,
            preco: 1.5,
            desconto: 1,
            total: 6.5
        }
    ];

    function getPedidos(){
        return pedidos;
    }

    function savePedido(pedido){  
        pedidos.push(pedido);
    }

    function getNewPedido() {
        return novosPedidos;
    }

    return {
        getPedidos: getPedidos,
        getNewPedido: getNewPedido,
        savePedido: savePedido
    }
}