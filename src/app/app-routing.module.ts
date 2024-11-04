import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'guest', loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule),},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),},                  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
