import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    BookingHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardComponent]
})
export class SharedModule { }
