import { db } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

const list = document.getElementById("ranking");

async function showRanking() {
  const snapshot = await getDocs(collection(db, "players"));
  const players = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    players.push({
      id: doc.id,
      nickname: data.nickname ?? doc.id,
      fixedCoins: data.fixedCoins ?? data.coins
    });
  });

  players.sort((a, b) => b.fixedCoins - a.fixedCoins);

  players.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}位 ${p.nickname} : ${p.fixedCoins}枚`;
    list.appendChild(li);
  });
}

showRanking();