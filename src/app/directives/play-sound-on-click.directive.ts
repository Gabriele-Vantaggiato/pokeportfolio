import { Directive, HostListener, Input } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Directive({
  selector: '[appPlaySoundOnClick]',
  standalone: true // Rendiamola una direttiva standalone
})
export class PlaySoundOnClickDirective {

  @Input('appPlaySoundOnClick') soundName: 'click' | 'open' | 'close' | '' = 'click';

  constructor(private audioService: AudioService) {}

  @HostListener('click')
  onClick() {
    switch (this.soundName) {
      case 'open':
        this.audioService.playOpen();
        break;
      case 'close':
        this.audioService.playClose();
        break;
      case 'click':
      default:
        this.audioService.playClick();
        break;
    }
  }
}
