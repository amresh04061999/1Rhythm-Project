import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable()
export class OverlayService{
  public overlayRef: any;
  constructor(private overlay:Overlay) { 
  }

  /**
   * Open a custom component in an overlay
   */
  open<T>(component: ComponentType<T>,istrue:boolean) {
    // Globally centered position strategy
    const positionStrategy = this.overlay
    .position()
    .global()
    // Create the overlay with customizable options
    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: istrue ? 'overlay-backdrop':'' ,
      //  backdropClass: 'cdk-overlay-transparent-backdrop'
    });
    const portal = new ComponentPortal(component);
    const instance = this.overlayRef.attach(portal);
    this.overlayRef.backdropClick().subscribe(()=>{
      this.overlayRef.detach()
    })
    return instance;
  }
  close() {
    this.overlayRef.detach()
  }
}
