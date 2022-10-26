import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

function addTodo(todoList, todo='test todo item') {
  const todoInput = todoList.getByLabelText("Task:");
  fireEvent.change(todoInput, {target: {value: todo}});
  const button = todoList.getByText("Add Task");
  fireEvent.click(button);
};

it("renders without crashing", function() {
  render(<TodoList/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<TodoList/>);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function() {
  const todoList = render(<TodoList/>);

  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  addTodo(todoList);

  const removeButton = todoList.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(todoList.getByText("test todo item")).toBeInTheDocument();
  expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
});

it("can remove a todo", function() {
  const todoList = render(<TodoList/>);
  addTodo(todoList);

  const removeButton = todoList.getByText("X");

  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});