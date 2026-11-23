interface UserProps {
  billing_address: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  properties: UserProps;
}
