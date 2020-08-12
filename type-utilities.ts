type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

// Readonly

const todo: Readonly<Todo> = {
  title: 'Assistir Blade',
  description: 'O caçador de vampiros.',
  completed: false,
}

// todo.completed = true;

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })


// Pick -- anular mais propriedades
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
  title: 'Jogar Tibia',
  completed: false,
}

// Omit - pegar mais propriedades
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
  title: 'Jogar Tibia',
  completed: false,
}