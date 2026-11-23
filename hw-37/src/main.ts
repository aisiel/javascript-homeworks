// import type { User } from "./types";

// type OptionalUserProps = Partial<User>
// // type RequiredUserProps = Required<OptionalUserProps>
// const user: OptionalUserProps = {
//   id: 1,
//   name: "User",
// };

// type UserProps = Pick<User, "properties">
// const user1 : UserProps = {
//   properties: {
//     billing_address: "ijeroiej"
//   }
// }

// type UserProps = Omit<User, "properties" | "name">
// const user2: UserProps = {
//   id: 4,
//   age: 30,
//   email: "dlfkjnvdas"

// }

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface State {
  data: User[];
  error: string | null;
  isLoading: boolean;
}

// const state: State ={
//   data: [],
//   error : null,
//   isLoading: false,
// }
const list = document.querySelector("ul");
let users: User[] | [] = [];
let error = null;
let isLoading = false;

const getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Failed");
    }
    const data = await res.json();
    users = data;
    console.log(users);
    const markup = users
  .map((user) => {
    return `
  <li>${user.username}</li>
  `;
  })
  .join("");
  
  list.innerHTML = markup;
  } catch {
    console.log("Error");
  }
};


getUsers();
