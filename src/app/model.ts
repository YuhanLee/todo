export class Model
{
  user;
  items;

  constructor()
  {
    this.user = "Yuhan";
    this.items =
    [
     new TodoItem("Buy Flowers", false),
     new TodoItem("Walk the dog", false),
     new TodoItem("Do the laundry", false),
     new TodoItem("Make dinner", false)
    ];
  }
}

export class TodoItem
{
  action;
  done;

  constructor (action, done)
  {
    this.action = action;
    this.done = done;
  }
}
