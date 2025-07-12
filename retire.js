import { db } from "./firebase-config.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const pointInput = document.getElementById("subPoints");

async function retirePlayer() {
  const ref = doc(db, "players", id);
  const snap = await getDoc(ref);
  const data = snap.data();
  await updateDoc(ref, { fixedCoins: data.coins, points: data.coins });
}

document.getElementById("retireBtn").onclick = retirePlayer;

document.getElementById("subPointBtn").onclick = async () => {
  const ref = doc(db, "players", id);
  const snap = await getDoc(ref);
  const newPoints = snap.data().points - parseInt(pointInput.value);
  await updateDoc(ref, { points: newPoints });
};