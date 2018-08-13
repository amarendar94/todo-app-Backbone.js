var Todo = Backbone.Model.extend({

    defaults:{
        completed: false
    },

    urlRoot: 'https://jsonplaceholder.typicode.com/todos',

    validate: function(attrs){
        if(!attrs.title){
            return "title is required for a todo";
        }
    },

    toggle:function(){
        this.set('completed',!this.get('completed'));
    }
}); 