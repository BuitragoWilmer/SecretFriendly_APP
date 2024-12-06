import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { UserItemComponent } from '../../components/user-item/user-item.component';
import { RondaCreateComponent } from '../../components/ronda-create/ronda-create.component';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-user-list',
  imports: [
    AsyncPipe,
    UserItemComponent,
    RondaCreateComponent,
    ErrorMessageComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  public userResults$!: Observable<User[]>;
  public errorMessage!: string;
  constructor(
    private readonly service: UserService
  ) { }

  ngOnInit(): void {
    this.obtenerData();
  }

  obtenerData(){
    this.userResults$ = this.service.getUsersList().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }));
  }
}