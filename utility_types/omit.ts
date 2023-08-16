// use : Omit<Type, Keys>
// Menghilangkan parameter

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description" | "createdAt">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

console.log(todo);
