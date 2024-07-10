import axios from "axios";

const getUser = async (userId: number) => {
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const users = res.data;
    return users.name;
    
  } catch(err){
    return 'INVALID USER ID';
  }
};

const input1 = 1;
const input2 = 100;

getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

export default getUser;