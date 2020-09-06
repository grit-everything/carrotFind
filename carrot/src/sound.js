'use strict';

const carrotSound = new Audio('./src/sound/carrot_pull.mp3');
const bugSound = new Audio('./src/sound/bug_pull.mp3');
const bgmSound = new Audio('./src/sound/bg.mp3');
const winSound = new Audio('./src/sound/game_win.mp3');
const alertSound = new Audio('./src/sound/alert.wav');

export function playCarrot() {
  playSound(carrotSound);
}

export function playBug() {
  playSound(bugSound);
}
export function playAlert() {
  playSound(alertSound);
}
export function playWin() {
  playSound(winSound);
}
export function playBGM() {
  playSound(bgmSound);
}
export function stopBGM() {
  stopSound(bgmSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
