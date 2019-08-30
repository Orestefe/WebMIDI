// Piano Key Sounds
const C4 = new Audio("assets/sounds/c4.mp3");
const Db4 = new Audio("assets/sounds/db4.mp3");
const D4 = new Audio("assets/sounds/d4.mp3");
const Eb4 = new Audio("assets/sounds/eb4.mp3");
const E4 = new Audio("assets/sounds/e4.mp3");
const F4 = new Audio("assets/sounds/f4.mp3");
const Gb4 = new Audio("assets/sounds/gb4.mp3");
const G4 = new Audio("assets/sounds/g4.mp3");
const Ab4 = new Audio("assets/sounds/ab4.mp3");
const A4 = new Audio("assets/sounds/a4.mp3");
const Bb4 = new Audio("assets/sounds/bb4.mp3");
const B4 = new Audio("assets/sounds/b4.mp3");
const C5 = new Audio("assets/sounds/c5.mp3");
const Db5 = new Audio("assets/sounds/db5.mp3");
const D5 = new Audio("assets/sounds/d5.mp3");
const Eb5 = new Audio("assets/sounds/eb5.mp3");
const E5 = new Audio("assets/sounds/e5.mp3");
const F5 = new Audio("assets/sounds/f5.mp3");
const Gb5 = new Audio("assets/sounds/gb5.mp3");
const G5 = new Audio("assets/sounds/g5.mp3");
const Ab5 = new Audio("assets/sounds/ab5.mp3");
const A5 = new Audio("assets/sounds/a5.mp3");
const Bb5 = new Audio("assets/sounds/bb5.mp3");
const B5 = new Audio("assets/sounds/b5.mp3");
const pianoKeys = [
  C4,
  Db4,
  D4,
  Eb4,
  E4,
  F4,
  Gb4,
  G4,
  Ab4,
  A4,
  Bb4,
  B4,
  C5,
  Db5,
  D5,
  Eb5,
  E5,
  F5,
  Gb5,
  G5,
  Ab5,
  A5,
  Bb5,
  B5
];

// Drum Sounds
const HiHat = new Audio("assets/sounds/808HiHat.wav");
const Kick = new Audio("assets/sounds/808Kick.wav");
const Stick = new Audio("assets/sounds/808Stick.wav");
const Tom = new Audio("assets/sounds/808Tom.wav");
const Clap = new Audio("assets/sounds/808Clap.wav");
const Rim = new Audio("assets/sounds/808Rim.wav");
const Snare01 = new Audio("assets/sounds/808Snare01.wav");
const Snare02 = new Audio("assets/sounds/808Snare02.wav");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

/* Play sound on click */
// C4
const C4Key = document.querySelector("#C4-key");
const playC4 = () => {
  playSound(C4);
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector("#Db4-key");
const playDb4 = () => {
  playSound(Db4);
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector("#D4-key");
const playD4 = () => {
  playSound(D4);
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector("#Eb4-key");
const playEb4 = () => {
  playSound(Eb4);
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector("#E4-key");
const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector("#F4-key");
const playF4 = () => {
  playSound(F4);
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector("#Gb4-key");
const playGb4 = () => {
  playSound(Gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector("#G4-key");
const playG4 = () => {
  playSound(G4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector("#Ab4-key");
const playAb4 = () => {
  playSound(Ab4);
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector("#A4-key");
const playA4 = () => {
  playSound(A4);
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector("#Bb4-key");
const playBb4 = () => {
  playSound(Bb4);
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector("#B4-key");
const playB4 = () => {
  playSound(B4);
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector("#C5-key");
const playC5 = () => {
  playSound(C5);
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector("#Db5-key");
const playDb5 = () => {
  playSound(Db5);
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector("#D5-key");
const playD5 = () => {
  playSound(D5);
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector("#Eb5-key");
const playEb5 = () => {
  playSound(Eb5);
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector("#E5-key");
const playE5 = () => {
  playSound(E5);
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", playE5);

// F5
const F5Key = document.querySelector("#F5-key");
const playF5 = () => {
  playSound(F5);
  F5Key.classList.add("active");
  setTimeout(() => F5Key.classList.remove("active"), 200);
};
F5Key.addEventListener("click", playF5);

// Gb5
const Gb5Key = document.querySelector("#Gb5-key");
const playGb5 = () => {
  playSound(Gb5);
  Gb5Key.classList.add("active");
  setTimeout(() => Gb5Key.classList.remove("active"), 200);
};
Gb5Key.addEventListener("click", playGb5);

// G5
const G5Key = document.querySelector("#G5-key");
const playG5 = () => {
  playSound(G5);
  G5Key.classList.add("active");
  setTimeout(() => G5Key.classList.remove("active"), 200);
};
G5Key.addEventListener("click", playG5);

// Ab5
const Ab5Key = document.querySelector("#Ab5-key");
const playAb5 = () => {
  playSound(Ab5);
  Ab5Key.classList.add("active");
  setTimeout(() => Ab5Key.classList.remove("active"), 200);
};
Ab5Key.addEventListener("click", playAb5);

// A5
const A5Key = document.querySelector("#A5-key");
const playA5 = () => {
  playSound(A5);
  A5Key.classList.add("active");
  setTimeout(() => A5Key.classList.remove("active"), 200);
};
A5Key.addEventListener("click", playA5);

// Bb5
const Bb5Key = document.querySelector("#Bb5-key");
const playBb5 = () => {
  playSound(Bb5);
  Bb5Key.classList.add("active");
  setTimeout(() => Bb5Key.classList.remove("active"), 200);
};
Bb5Key.addEventListener("click", playBb5);

// B5
const B5Key = document.querySelector("#B5-key");
const playB5 = () => {
  playSound(B5);
  B5Key.classList.add("active");
  setTimeout(() => B5Key.classList.remove("active"), 200);
};
B5Key.addEventListener("click", playB5);

// HiHat
const HiHatKey = document.querySelector("#pad1");
const playHiHat = () => {
  playSound(HiHat);
  HiHatKey.classList.add("active");
  setTimeout(() => HiHatKey.classList.remove("active"), 200);
};
HiHatKey.addEventListener("click", playHiHat);

// Kick
const KickKey = document.querySelector("#pad2");
const playKick = () => {
  playSound(Kick);
  KickKey.classList.add("active");
  setTimeout(() => KickKey.classList.remove("active"), 200);
};
KickKey.addEventListener("click", playKick);

// Stick
const StickKey = document.querySelector("#pad3");
const playStick = () => {
  playSound(Stick);
  StickKey.classList.add("active");
  setTimeout(() => StickKey.classList.remove("active"), 200);
};
StickKey.addEventListener("click", playStick);

// Tom
const TomKey = document.querySelector("#pad4");
const playTom = () => {
  playSound(Tom);
  TomKey.classList.add("active");
  setTimeout(() => TomKey.classList.remove("active"), 200);
};
TomKey.addEventListener("click", playTom);

// Clap
const ClapKey = document.querySelector("#pad5");
const playClap = () => {
  playSound(Clap);
  ClapKey.classList.add("active");
  setTimeout(() => ClapKey.classList.remove("active"), 200);
};
ClapKey.addEventListener("click", playClap);

// Rim
const RimKey = document.querySelector("#pad6");
const playRim = () => {
  playSound(Rim);
  RimKey.classList.add("active");
  setTimeout(() => RimKey.classList.remove("active"), 200);
};
RimKey.addEventListener("click", playRim);

// Snare01
const Snare01Key = document.querySelector("#pad7");
const playSnare01 = () => {
  playSound(Snare01);
  Snare01Key.classList.add("active");
  setTimeout(() => Snare01Key.classList.remove("active"), 200);
};
Snare01Key.addEventListener("click", playSnare01);

// Snare02
const Snare02Key = document.querySelector("#pad8");
const playSnare02 = () => {
  playSound(Snare02);
  Snare02Key.classList.add("active");
  setTimeout(() => Snare02Key.classList.remove("active"), 200);
};
Snare02Key.addEventListener("click", playSnare02);

window.addEventListener("keydown", ({ keyCode }) => {
  /* Piano Keys */
  // Press Tab
  if (keyCode === 9) return playC4();
  // Press 1
  if (keyCode === 49) return playDb4();
  // Press Q
  if (keyCode === 81) return playD4();
  // Press 2
  if (keyCode === 50) return playEb4();
  // Press W
  if (keyCode === 87) return playE4();
  // Press E
  if (keyCode === 69) return playF4();
  // Press 4
  if (keyCode === 52) return playGb4();
  // Press R
  if (keyCode === 82) return playG4();
  // Press 5
  if (keyCode === 53) return playAb4();
  // Press T
  if (keyCode === 84) return playA4();
  // Press 6
  if (keyCode === 54) return playBb4();
  // Press Y
  if (keyCode === 89) return playB4();
  // Press U
  if (keyCode === 85) return playC5();
  // Press 8
  if (keyCode === 56) return playDb5();
  // Press I
  if (keyCode === 73) return playD5();
  // Press 9
  if (keyCode === 57) return playEb5();
  // Press O
  if (keyCode === 79) return playE5();
  // Press P
  if (keyCode === 80) return playF5();
  // Press -
  if (keyCode === 189) return playGb5();
  // Press [
  if (keyCode === 219) return playG5();
  // Press =
  if (keyCode === 187) return playAb5();
  // Press ]
  if (keyCode === 221) return playA5();
  // Press Delete
  if (keyCode === 8) return playBb5();
  // Press \
  if (keyCode === 220) return playB5();

  /* Pad Keys */
  // Press 1
  if (keyCode === 97) return playHiHat();
  // Press 2
  if (keyCode === 98) return playKick();
  // Press 3
  if (keyCode === 99) return playStick();
  // Press 4
  if (keyCode === 100) return playTom();
  // Press 5
  if (keyCode === 101) return playClap();
  // Press 6
  if (keyCode === 102) return playRim();
  // Press 7
  if (keyCode === 103) return playSnare01();
  // Press 8
  if (keyCode === 104) return playSnare02();
});
