import axios from "axios";
import type { User } from './types.ts';

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();
