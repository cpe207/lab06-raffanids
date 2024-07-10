import axios from "axios";

const getTodo = async (todoId: number) => {
  try {
    const resTodo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = resTodo.data;
    const userId = todo.userId;
    
    const resUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = resUser.data;

    return {
      owner: user.name,
      title: todo.title,
      completed: todo.completed,
    }
 } 
catch (error) {
    return 'INVALID TODO ID';
}
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;