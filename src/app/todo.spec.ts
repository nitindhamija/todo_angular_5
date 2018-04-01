import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const todo = new Todo({
      name: 'hello',
      completed: true
    });
    expect(todo.name).toEqual('hello');
    expect(todo.completed).toEqual(true);
  });
});
