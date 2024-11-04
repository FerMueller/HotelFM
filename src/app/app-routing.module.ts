import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'creditcards', loadChildren: () => import('./creditcards/creditcards.module').then(m => m.CreditcardsModule),},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),},                  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
