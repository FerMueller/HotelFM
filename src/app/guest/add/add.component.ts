import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Guest } from 'src/app/models/guest';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  private subscription: Subscription | undefined;

  constructor(private guestService:GuestService,
    private router: Router){
  }

  newCreditCard: Guest = {
    id: undefined,
    nome: "",
    documento: "",
    telefone: "",
    noHotel: false
  }

  
  saveGuest(){
    this.subscription = this.guestService.createGuest(this.newCreditCard).subscribe(data => {
      this.router.navigate(['guest']);
    })
  }

  ngOnDestroy(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
