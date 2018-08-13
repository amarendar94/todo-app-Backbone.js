var Todos = Backbone.Collection.extend({
    model: Todo,

    url: "https://jsonplaceholder.typicode.com/todos"
});