app.factory('pedidoService', pedidoService);

function pedidoService(){
    var listaDePedido = [];

    function getListaDePedido(){
        return listaDePedido;
    }

    return {
        getListaDePedido : getListaDePedido
    }
}