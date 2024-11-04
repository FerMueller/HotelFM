import { Component, OnInit, ViewChild } from '@angular/core';
import { Guest } from '../models/guest';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-creditcards',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent{

  guest: Guest[] = [];
  searchTerm: string = '';
  searchFilter: string = 'nome';

  creditCardMaximumAmount: number = 0;
  creditCardMaximumInterest: number = 0;

  constructor(private guestService: GuestService) {
    this.guestService.getGuests().subscribe((data:Guest[]) => {
      this.guest = data;

      this.dataSource = new MatTableDataSource(this.guest);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  dataSource = new MatTableDataSource(this.guest);

  displayColumns = ["select", "id", "nome", "documento", "telefone", "noHotel", "actions"];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: Guest){
    this.selection.toggle(row as never);
  }

  onFilter(): void {
    if (this.searchFilter === 'nome') {
      this.guestService.findByName(this.searchTerm).subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (this.searchFilter === 'documento') {
      if (this.searchTerm){
      this.guestService.findByDocument(this.searchTerm).subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else {
      this.guestService.getGuests().subscribe((data:Guest[]) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }
    } else if (this.searchFilter === 'telefone') {
      if (this.searchTerm){
        this.guestService.findbyPhone(this.searchTerm).subscribe(data => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      } else {
        this.guestService.getGuests().subscribe((data:Guest[]) => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      }
    } else if (this.searchFilter === 'no-hotel') {
      this.guestService.inHotel().subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (this.searchFilter === 'sem-checkin') {
      this.guestService.listWithoutCheckin().subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }
}
