var TodoView = Backbone.View.extend({
    tagName:'li',

    initialize: function(options){
        if(!(options && options.model)){
            throw "model is not specified";
        }

        this.model.on('change', this.render, this)
    },

    events: {
        'click #toggle': "toggleTodo",
        'click #delete': "deleteTodo"
    },

    deleteTodo: function(){
        this.model.destroy();
    },

    toggleTodo: function(){
        this.model.toggle();
        this.model.save();
    },



    render:function(){
        this.$el.attr("id", this.model.id)
        this.$el.toggleClass("completed", this.model.get("completed"));
        // var checked = this.model.get('completed')? "checked": "";
        // this.$el.html(`<input type="checkbox" id="toggle" ${checked}></input>${this.model.escape("title")}<button id="delete">Delete</button>`)

        var template = $("#todoViewTemplate").html();
        var html = Mustache.render(template,this.model.toJSON());
        this.$el.html(html);

        return this;
    }
});