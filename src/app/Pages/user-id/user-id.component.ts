import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { UserComponent } from '../../components/user/user.component';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-user-id',
  standalone: true,
  imports: [
    AsyncPipe,
    UserComponent,
    ErrorMessageComponent
  ],
  templateUrl: './user-id.component.html',
  styleUrl: './user-id.component.css'
})

export class UserIdComponent implements OnInit{
  public userResults$!: Observable<User>;
  public errorMessage!: string;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    const userId = 1; 
    this.userResults$ = this.service.getUser(userId).pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }
}
