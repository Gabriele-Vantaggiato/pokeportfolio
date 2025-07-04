import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {TooltipComponent} from '../components/shared/tooltip/tooltip.component';

@Directive({
  selector: '[appCdkTooltip]',
  standalone: true,
})
export class CdkTooltipDirective {
  @Input('appCdkTooltip') text = '';
  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  @HostListener('mouseenter')
  show() {
    // 1. Definisco la strategia di posizionamento: collegato all'elemento
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8,
        },
      ]);

    this.overlayRef = this.overlay.create({ positionStrategy });

    // 3. Creo un "portale" per il TooltipComponent
    const tooltipPortal = new ComponentPortal(TooltipComponent);

    // 4. "Attacco" il componente al layer fluttuante
    const componentRef = this.overlayRef.attach(tooltipPortal);

    // 5. Passo il testo al componente appena creato
    componentRef.instance.text = this.text;
  }

  @HostListener('mouseleave')
  hide() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
