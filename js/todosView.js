var TodosView = Backbone.View.extend({

    id: "todoItemsContainer",

  initialize: function(options) {
    if (!(options && options.model)) {
      throw "model is not specified";
    }

    this.model.on("add", this.addToDom, this);
    this.model.on("remove", this.removeFromDom, this);
  },

  addToDom: function(todoItem) {
    var view = new TodoView({ model: todoItem });
    this.$("#todoItems").append(view.render().$el);
  },

  removeFromDom: function(todoItem) {
    this.$("li#" + todoItem.id).remove();
  },

  events: {
    "click #addItem": "addTodoItem",
    "keypress #itemDesc": "onkeyPress"
  },

  onkeyPress: function(e) {
    if (e.keyCode == 13) {
      var $itemDesc = this.$("#itemDesc");
      if ($itemDesc.val())
        var todo = new Todo({
          title: $itemDesc.val()
        });
      // todo.save();
      // this.model.add(todo);
      this.model.create(todo);
      $itemDesc.val("");
    }
  },

  // addTodoItem: function(){
  //     var $itemDesc = this.$('#itemDesc');
  //     if($itemDesc.val())
  //         var todo = new Todo({
  //             title: $itemDesc.val()
  //         })
  //         // todo.save();
  //         // this.model.add(todo);
  //         this.model.create(todo);
  //         $itemDesc.val("");
  // },

  render: function() {
    // self = this;
    // this.$el.append('<input type="text" autofocus id="itemDesc"/>');
    // this.$el.append('<button id="addItem">Add</button>');
    // this.$el.append('<ul id="todoItems"></ul>')

    // this.model.each(function(todoItem){
    //     var todoView = new TodoView({model: todoItem})
    //     self.$el.append(todoView.render().$el);
    // });

    var template = $("#todoItemsTemplate").html();
    var html = Mustache.render(template);
    this.$el.html(html);

    return this;
  }
});
