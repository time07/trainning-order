app.factory('pedidoService', pedidoService);

function pedidoService(){
    var listaDePedido = [];

    function getListaDePedido(){
        return listaDePedido;
    }

    function gravarPedido(pedido){
      listaDePedido.push(pedido);
    }

    return {
        getListaDePedido : getListaDePedido,
        gravarPedido : gravarPedido
    }
}
