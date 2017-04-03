var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:"templates/home.html",
        controller:"mainController"
    })
    .when('/produto', {
        templateUrl:"templates/produto.html",
        controller:"produtoController"
    })
    .when('/produto/cadastrar', {
        templateUrl:"templates/produto-form.html",
        controller:"produtoController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

app.config(function($locationProvider){
    $locationProvider.hashPrefix('');
});
