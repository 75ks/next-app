import { NextApiRequest, NextApiResponse } from "next";
import User from "../types/user";

const users: User[] = [
  {
    id: 1,
    name: "Taro",
    age: 18,
    phoneNumber: "09012345678",
    postCode: "1234567",
    address1: "Tokyo",
    address2: "AAAAA",
    address3: "AAA"
  },
  {
    id: 2,
    name: "Jiro",
    age: 16,
    phoneNumber: "09023456789",
    postCode: "2345678",
    address1: "Kanagawa",
    address2: "BBBBB",
    address3: "BBB"
  },
  {
    id: 3,
    name: "Saburo",
    age: 20,
    phoneNumber: "09034567890",
    postCode: "3456789",
    address1: "Saitqma",
    address2: "CCCCC",
    address3: "CCC"
  },
  {
    id: 4,
    name: "Siro",
    age: 24,
    phoneNumber: "09045678901",
    postCode: "4567890",
    address1: "Tchiba",
    address2: "DDDDD",
    address3: "DDD"
  },
  {
    id: 5,
    name: "Goro",
    age: 15,
    phoneNumber: "09056789012",
    postCode: "5678901",
    address1: "Ibaraki",
    address2: "EEEEE",
    address3: "EEE"
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