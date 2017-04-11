app.factory("produtoService",produtoService)

function produtoService(){
    produtos = [];
    prodId=0;

    function generateId(){
        prodId = prodId +1;
        return prodId;
    }
    function manterProduto(produto){        
        produto.id = generateId();
        produtos.push("produto");   
        console.log(produto);
    }
    function consultarProduto(){
        return produtos;
    }
 return{
    manterProduto: manterProduto,
    consultarProduto: consultarProduto
 }   
}