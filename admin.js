import { db } from "./firebase-config.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const coinDisplay = document.getElementById("coin");

async function loadPlayer() {
  const ref = doc(db, "players", id);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    coinDisplay.textContent = snap.data().coins;
  }
}

document.getElementById("add").onclick = async () => {
  const ref = doc(db, "players", id);
  const snap = await getDoc(ref);
  const newCoins = snap.data().coins + 1;
  await updateDoc(ref, { coins: newCoins });
  coinDisplay.textContent = newCoins;
};

document.getElementById("sub").onclick = async () => {
  const ref = doc(db, "players", id);
  const snap = await getDoc(ref);
  const newCoins = snap.data().coins - 1;
  await updateDoc(ref, { coins: newCoins });
  coinDisplay.textContent = newCoins;
};

loadPlayer();