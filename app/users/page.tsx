"use client";

import User from "@/pages/types/user";
import { useEffect, useState } from "react";
import Loading from "../components/layouts/loading";

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
      <div className="text-center mb-4">
        <p>■ ユーザーリスト</p>
      </div>
      {loading ? (
        <Loading
          text="データ取得中です。しばらくお待ちください。"
        />
      ) : (
        users.map((user, index) => (
          <ul key={index} className="text-center p-2 border-t">
            <li>ID：{user.id}</li>
            <li>名前：{user.name}</li>
            <li>年齢：{user.age}</li>
          </ul>
        ))
      )}
    </div>
  );
}
