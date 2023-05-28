"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const searchParams = useSearchParams();
  const [pokemon, setPokemon] = useState<any>();

  const getPokemon = async () => {
    //  ポケモンNo1~1008までのランダムな数値を作成
    let randnum: number = Math.floor(Math.random() * 1009);
    // クエリパラメータが存在する かつ クエリパラメータが空ではない場合
    if (searchParams && searchParams.get("id") !== "") {
      randnum = Number(searchParams.get("id"));
      // クエリパラメータが数字ではない場合
      if (isNaN(randnum)) {
        alert("パラメータには数字を入力してください");
        return;
      }
    }
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randnum}`);
    // 成功
    if (res.ok) {
      const data = await res.json();
      setPokemon(data);
    // 失敗　
    } else {
      alert(`No.${randnum} のポケモンは存在しません`);
    }
  }

  useEffect(() => {
    getPokemon();
    return () => {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-4 text-center">
      {pokemon && (
        <Image
          src={pokemon.sprites.front_default}
          width={300}
          height={300}
          alt="画像"
          className="m-auto"
        />
      )}
      {pokemon && (
        <ul>
          <li className="text-xl mb-5">No: {pokemon.id}</li>
          <li className="text-xl mb-5">なまえ: {pokemon.name}</li>
          <li className="text-xl">タイプ: {pokemon.types[0].type.name}</li>
        </ul>
      )}
    </div>
  )
}
