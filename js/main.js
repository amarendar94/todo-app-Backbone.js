// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

$(document).ready(function() {
  var todos = new Todos();
  todos.fetch();

  var todosView = new TodosView({ model: todos });
  $("body").append(todosView.render().$el);
});
