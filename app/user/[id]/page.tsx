"use client";

import User from "@/pages/types/user";
import { useEffect, useState } from "react";
import Loading from "../../components/layouts/loading";

export default function Users({ params }: {
  params: { id: number }
}) {
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
        users[params.id - 1]
      ) ? (
        <ul className="text-center p-2 border-t">
          <li>ID：{users[params.id - 1].id}</li>
          <li>名前：{users[params.id - 1].name}</li>
          <li>年齢：{users[params.id - 1].age}</li>
          <li>電話番号：{users[params.id - 1].phoneNumber}</li>
          <li>郵便番号：{users[params.id - 1].postCode}</li>
          <li>住所1：{users[params.id - 1].address1}</li>
          <li>住所2：{users[params.id - 1].address2}</li>
          <li>住所3：{users[params.id - 1].address3}</li>
        </ul>
      ) : (
        <p className="text-center p-2 border-t">ユーザーが存在しません。</p>
      )}
    </div>
  );
}
