import { db } from "./firebase-config.js";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const coinDisplay = document.getElementById("coin");
const pointDisplay = document.getElementById("point");
const nicknameInput = document.getElementById("nickname");

async function init() {
  const ref = doc(db, "players", id);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data();
    coinDisplay.textContent = data.coins ?? 0;
    pointDisplay.textContent = data.points ?? 0;
    nicknameInput.value = data.nickname ?? "";
  } else {
    await setDoc(ref, { coins: 10, points: 0 });
    coinDisplay.textContent = 10;
    pointDisplay.textContent = 0;
  }
}

nicknameInput.addEventListener("change", async () => {
  const ref = doc(db, "players", id);
  await updateDoc(ref, { nickname: nicknameInput.value });
});

init();