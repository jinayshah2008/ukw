const burstPhrases = [
  "Best sister ever",
  "You are loved",
  "I am with you",
  "Tere se bat karke accha lagta hai",
  "No chance anyone is sick of you",
  "I will stand with you",
  "Jiiiiiyyyyyyyyaaaaaa",
  "Heartfelt sorry",
  "You matter",
  "Always on your side"
];

const lineOptions = [
  "Jiya, if messages could turn into proof, ours would need a whole website.",
  "This is what 17,758 messages say when you put them together: you matter, a lot.",
  "Some people get one love note. You got statistics, receipts, and a full website because obviously normal is not our style.",
  "The chat says hehe, sorry, call, love, and Jiya again and again. I think the meaning is clear.",
  "I care in the noisy way, the protective way, the annoying way, and the always-there way."
];

const storageKey = "jiya-site-signature";
const savedSignature = localStorage.getItem(storageKey);
const signature = document.querySelector("#signatureName");

function setDate() {
  const date = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date());
  document.querySelector("#todayText").textContent = date;
}

function launchBurst() {
  const layer = document.querySelector("#burstLayer");
  layer.innerHTML = "";

  burstPhrases.forEach((phrase, index) => {
    const note = document.createElement("span");
    note.className = "burst-note";
    note.textContent = phrase;
    note.style.setProperty("--x", `${7 + ((index * 10) % 84)}%`);
    note.style.animationDelay = `${index * 0.1}s`;
    layer.appendChild(note);
  });

  window.setTimeout(() => {
    layer.innerHTML = "";
  }, 4600);
}

function rotateHeroLine() {
  const line = document.querySelector("#heroLine");
  const next = lineOptions[Math.floor(Math.random() * lineOptions.length)];
  line.textContent = next;
}

function wireSignature() {
  if (savedSignature) {
    signature.textContent = savedSignature;
  }

  signature.addEventListener("input", () => {
    localStorage.setItem(storageKey, signature.textContent.trim());
  });
}

setDate();
wireSignature();
document.querySelector("#launchLove").addEventListener("click", launchBurst);
document.querySelector(".brand__mark").addEventListener("click", rotateHeroLine);
