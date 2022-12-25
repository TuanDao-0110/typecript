type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creaditCardDetails?: number;
};

let myUser: User = {
  _id: "1212",
  name: "tuan",
  email: "tuan@gmail.com",
  isActive: true,
};
type cardNumber = {
  number: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

  
myUser.name = "new user";
export {};
