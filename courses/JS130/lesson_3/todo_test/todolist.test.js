const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  test("'calling toArray returns the list in array form'", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("calling 'first' returns first item in list", () => {
    expect(list.first()).toEqual(todo1);
  });

  test("calling 'last' returns last item in list", () => {
    expect(list.last()).toEqual(todo3);
  });

  test("calling 'shift' removes and returns the first item in list", () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray().length).toEqual(2);
  });

  test("calling 'pop' removes and returns the last item in list", () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray().length).toEqual(2);
  });

  test("'isDone' returns true if all items are done, false otherwise", () => {
    expect(list.isDone()).not.toBeTruthy();
  });

  test("'add' throws an TypeError if argument is not a Todo object", () => {
    expect(() => list.add("hello, world")).toThrow(TypeError);
    expect(() => list.add(2)).toThrow(TypeError);
  });

  test("'itemAt' returns Todo object at a given, valid index", () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test("'markDoneAt' marks a Todo, at a valid index, as done", () => {
    expect(() => list.markDoneAt(10)).toThrow(ReferenceError);
    list.markDoneAt(0);
    expect(todo1.isDone()).toBeTruthy();
  });

  test("'markUndoneAt' marks a Todo, at a valid index, as not done", () => {
    expect(() => list.markUndoneAt(10)).toThrow(ReferenceError);

    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markUndoneAt(0);

    expect(todo1.isDone()).not.toBeTruthy();
    expect(todo2.isDone()).toBeTruthy();
  });

  test("'markAllDone' marks all Todos as done", () => {
    list.markAllDone();

    expect(list.toArray().every(todo => todo.isDone())).toBeTruthy();
    expect(list.isDone()).toBeTruthy();
  }); 

  test("'removeAt' removes a Todo at a given, valid index", () => {
    expect(() => list.removeAt(10)).toThrow(ReferenceError);

    list.removeAt(0);
    expect(list.toArray().length).toEqual(2);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });

  test("'toString' returns different string for done todo", () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;
  
    list.markDoneAt(1);
  
    expect(list.toString()).toBe(string);
  });

  test("'toString' returns different string for done todo", () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
  
    list.markAllDone();
  
    expect(list.toString()).toBe(string);
  });

  test("'forEach' iterates over every element in list", () => {
    let list = [todo1, todo2, todo3];

    list.forEach((todo, index) => {
      expect(todo).toEqual(list[index]);
    });
  });

  test("'filter' returns a new TodoList object with the filtered items", () => {
    todo2.markDone();
    let filtered = list.filter(todo => todo.isDone());

    expect(filtered.toArray().length).toEqual(1);
  });

  test("'findByTitle' returns the Todo object with the given title", () => {
    expect(list.findByTitle("blah")).toEqual(undefined);
    expect(list.findByTitle("Buy milk")).toEqual(todo1);
  });

  test("'allDone' returns new TodoList object with Todos that are done", () => {
    todo2.markDone();
    let filtered = list.allDone();

    expect(filtered.toArray().length).toEqual(1);
  });

  test("'allNotDone' returns new TodoList with Todos that are not done", () => {
    todo2.markDone();
    let filtered = list.allNotDone(todo => todo.isDone());

    expect(filtered.toArray().length).toEqual(2);
  });

  test("'markDone' marks a Todo with the given title as done", () => {
    list.markDone("blah");
    expect(list.itemAt(0).isDone()).not.toBeTruthy();
    expect(list.itemAt(1).isDone()).not.toBeTruthy();
    expect(list.itemAt(2).isDone()).not.toBeTruthy();

    list.markDone("Buy milk");
    expect(list.itemAt(0).isDone()).toBeTruthy();
  });

  test("'markAllUndone' marks all Todos as not done", () => {
    list.markAllDone();
    list.markAllUndone();
    expect(list.itemAt(0).isDone()).not.toBeTruthy();
    expect(list.itemAt(1).isDone()).not.toBeTruthy();
    expect(list.itemAt(2).isDone()).not.toBeTruthy();
  }); 
});