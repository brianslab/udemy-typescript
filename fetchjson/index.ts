import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const { id, title, completed } = todo;

  logTodo(id, completed, title);
});

const logTodo = (id, title, completed) => {
  console.log(`
    The Todo with ID: ${id}
    has a title of: ${title}
    Is it finished? ${completed}
  `);
};
