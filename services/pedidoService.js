app.factory('pedidoService', pedidoService);

function pedidoService(){
    var listaDePedido = [];
    listaDePedido.itens = [];

    function getListaDePedido(){
        return listaDePedido;
    }

    function gravarItem(produto){
        listaDePedido.itens.push(produto);        
    }

    function getListaDeItens(){
        return listaDePedido.itens;
    }

    return {
        getListaDePedido : getListaDePedido,
        getListaDeItens : getListaDeItens,
        gravarItem : gravarItem
    }
}