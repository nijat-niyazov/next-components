export const myURL = "http://localhost:3500";

export const todosURL = "/todos/";

export const getTodo = async (id: string) => {
  try {
    const res = await fetch(myURL + todosURL + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["todos"],
      },
    });

    const data = res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editTodo = async (id: string, content: { text: string }) => {
  try {
    const res = await fetch(myURL + todosURL + id, {
      method: "PATCH",
      cache: "no-cache",
      body: JSON.stringify(content),
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["todos"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (todo: {
  id: number;
  text: string;
  completed: boolean;
}) => {
  try {
    await fetch(myURL + todosURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
      next: {
        tags: ["todos"],
      },
    });
  } catch (error: any) {
    return { message: "Something went wrong" };
  }
};

export const updateTodo = async (
  id: string,
  completed: { completed: boolean }
) => {
  try {
    await fetch(myURL + todosURL + id, {
      method: "PATCH",
      cache: "no-cache",
      body: JSON.stringify(completed),
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["todos"],
      },
    });
  } catch (error: any) {
    return { message: "Something went wrong" };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch(myURL + todosURL, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["todos"],
      },
    });

    const data = res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const deleteTodo = async (id: number) =>
//   await axios.post(myURL + todosURL, id);
