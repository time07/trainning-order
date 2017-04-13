app.factory("produtoService",produtoService)

function produtoService(){
    produtos = [];
    prodId=0;

    function generateId(){
        prodId++;
        return prodId;
    }
    function manterProduto(produto){ 
        //produto.id = generateId();
        produtos.push(produto);   
        console.log(produtos);
    }
    function consultarProduto(){
        return produtos;
    }
 return{
    manterProduto: manterProduto,
    consultarProduto: consultarProduto
 }   
}