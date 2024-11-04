import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  guestId!: Number;

  private destory$: Subject<void> = new Subject<void>();

  constructor(private router: ActivatedRoute,
    private route: Router,
    private matSnackBar : MatSnackBar,
    private guestService: GuestService) {
    this.guestId = parseInt(this.router.snapshot.paramMap.get("id") || ''
    );

    // Delete Functionality
    this.guestService.deleteGuest(this.guestId)
    .pipe(takeUntil(this.destory$))
    .subscribe(data => {
       this.showSuccessMessage("Guest Deleted Successfully"); 
      this.route.navigate(['guest']);
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
