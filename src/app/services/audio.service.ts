import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private clickSound = new Audio('../assets/sounds/poke_click.wav');
  private openSound = new Audio('assets/sounds/poke_open.wav');
  private closeSound = new Audio('assets/sounds/poke_close.wav');

  constructor() {
    this.clickSound.volume = 0.5;
    this.openSound.volume = 0.5;
    this.closeSound.volume = 0.5;
  }

  playClick() {
    this.clickSound.currentTime = 0;
    this.clickSound.play();
  }

  playOpen() {
    this.openSound.currentTime = 0;
    this.openSound.play();
  }

  playClose() {
    this.closeSound.currentTime = 0;
    this.closeSound.play();
  }
}
