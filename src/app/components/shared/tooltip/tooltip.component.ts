import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  styleUrls: ['./tooltip.component.css'],
  template: `
    <div class="poke-tooltip">
      {{ text }}
    </div>
  `
})
export class TooltipComponent {
  @Input() text: string = '';
}
