"use client";

import User from "@/pages/types/user";
import { useEffect, useState } from "react";
import Loading from "../components/layouts/loading";
import Link from "next/link";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    getData();
    return () => {
    }
  }, []);

  return (
    <div className="p-4">
      <p className="text-center mb-4">■ ユーザーリスト</p>
      {loading ? (
        <Loading
          text="データ取得中です。しばらくお待ちください。"
        />
      ) : (
        users.map((user, index) => (
          <Link href={`/user/${user.id}`} key={index} className="hover:text-neutral-500">
            <ul className="text-center p-2 border-t">
              <li>ID：{user.id}</li>
              <li>名前：{user.name}</li>
              <li>年齢：{user.age}</li>
            </ul>
          </Link>
        ))
      )}
    </div>
  );
}
