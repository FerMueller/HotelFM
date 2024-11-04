import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest.component';
import { DeleteComponent } from './delete/delete.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddComponent } from './add/add.component';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  { path: '', component: GuestComponent},
  { path: 'add', component: AddComponent},
  { path: 'delete/:id', component: DeleteComponent},
  { path: '**', component: PageNotFoundComponent},
  { path: 'booking', component: BookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
