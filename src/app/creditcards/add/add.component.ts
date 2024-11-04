import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  private subscription: Subscription | undefined;

  constructor(private creditcardsService:CreditcardsService,
    private router: Router){
  }

  newCreditCard: CreditCard = {
    id: undefined,
    nome: "",
    documento: "",
    telefone: "",
    noHotel: false
  }

  
  saveCreditCard(){
    this.subscription = this.creditcardsService.createCreditCard(this.newCreditCard).subscribe(data => {
      alert("Credit Card Added");
      this.router.navigate(['creditcards']);
    })
  }

  ngOnDestroy(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
