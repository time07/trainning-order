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
    function alterarProduto(produto){
        remover(produto.$index);
        manterProduto(produto);
        console.log(produtos);
    }
    function consultarProduto(){
        return produtos;
    }
    function consultarProdutoPorId(Id){
      for (var produto in produtos) {
        if (produto.id == Id ) {
          return produto;
        }
      }
    }
    function remover(index){
      produtos.splice(index,1);
    }
 return{
    manterProduto: manterProduto,
    consultarProduto: consultarProduto,
    consultarProdutoPorId: consultarProdutoPorId,
    remover: remover,
    alterarProduto: alterarProduto
 }
}
