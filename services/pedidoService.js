app.factory('pedidoService', pedidoService);

function pedidoService(){
    var listaDePedido = [];
    listaDePedido.itens = [];

    function getListaDePedido(){
        return listaDePedido;
    }

    function getListaDeItens(){
        return listaDePedido.itens;
    }

    return {
        getListaDePedido : getListaDePedido,
        getListaDeItens : getListaDeItens
    }
}
