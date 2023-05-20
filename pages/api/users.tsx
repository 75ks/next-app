import { NextApiRequest, NextApiResponse } from "next";
import User from "../types/user";

const users: User[] = [
  {
    id: 1,
    name: "Taro",
    age: 18
  },
  {
    id: 2,
    name: "Jiro",
    age: 16
  },
  {
    id: 3,
    name: "Saburo",
    age: 20
  },
  {
    id: 4,
    name: "Siro",
    age: 24
  },
  {
    id: 5,
    name: "Goro",
    age: 15
  },
];

const Users = async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise(resolve => {
    //APIコール風の動きのため、2秒止める
    setTimeout(() => {
      resolve("Success");
    }, 2000);
  });
  //レスポンスは200で上記で定義してデータを返す
  res.status(200).json(users);
}

export default Users;