interface ICreateTodo{
    name: string,
    description: string,
}

interface IUpdateTodo{
    id: string,
    name?: string,
    description?: string
}

export {
   ICreateTodo,
   IUpdateTodo,
};
