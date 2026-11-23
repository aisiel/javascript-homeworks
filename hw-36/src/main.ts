// type User = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// };

// interface User {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
// }

// const user: User = {
//   id: 1,
//   name: "Clementine Bauch",
//   username: "Samantha",
//   email: "Nathan@yesenia.net",
// };
// const sayHello = (user: User): string => {
//  return `Hello, ${user.name}!`
// };
// console.log(sayHello(user));

// type Direction = "left" | "right"

// const direction: Direction = "left"
// console.log(direction)

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
const user = {
  id: 3,
  name: "Clementine Bauch",
  username: "Samantha",
  email: "Nathan@yesenia.net",
  address: {
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "McKenziehaven",
    zipcode: "59590-4157",
    geo: {
      lat: "-68.6102",
      lng: "-47.0653",
    },
  },
  phone: "1-463-123-4447",
  website: "ramiro.info",
  company: {
    name: "Romaguera-Jacobson",
    catchPhrase: "Face to face bifurcated interface",
    bs: "e-enable strategic applications",
  },
};
