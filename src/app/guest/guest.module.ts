import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GuestComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class GuestModule { }