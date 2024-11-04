import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  bookingId!: Number;

  private destory$: Subject<void> = new Subject<void>();

  constructor(private router: ActivatedRoute,
    private route: Router,
    private matSnackBar : MatSnackBar,
    private bookingService: BookingService) {
    this.bookingId = parseInt(this.router.snapshot.paramMap.get("id") || ''
    );

    // Delete Functionality
    this.bookingService.deleteBooking(this.bookingId)
    .pipe(takeUntil(this.destory$))
    .subscribe(data => {
       this.showSuccessMessage("Credit Card Deleted Successfully"); 
      this.route.navigate(['creditcards']);
    })
  }

  showSuccessMessage(message: string){
    this.matSnackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  ngOnDestroy(){
    this.destory$.next();
    this.destory$.complete();
  }
}
