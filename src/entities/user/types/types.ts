//Тип данных пользователя, которые мы получаем с сервера
export type UsersData<T = Record<string, unknown>> = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: T;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: string;
  city: string;
};

export type IUserCard = Pick<IUser, 'id' | 'name' | 'email' | 'city'>;
