import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink  } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { FormsModule } from '@angular/forms'; 
import { UserService } from '../../services/user.service';
import { User, UserCreateResponse} from '../../interfaces/user';
import { GiftCreate } from '../../interfaces/Gift';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})

export class UserCreateComponent implements OnInit{
  public idGroupFamily: string | null = null;
  public user: UserCreateResponse | null = null;
  public inputValue: string = '';
  public inputGiftValue: string = '';
  public errorMessage!: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly giftService: GiftService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idGroupFamily = params.get('idGroupFamily');
    });
  }

  crear(): void {

    const nuevoUser: User = {
      name: this.inputValue,
      groupFamilyId: Number(this.idGroupFamily)
    }

    this.userService.createUser(nuevoUser).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY; // Manejo del error
      })
    ).subscribe({
      next: (user: UserCreateResponse) => {
        this.user = user;
        const nuevoRegalo: GiftCreate = {
          message: this.inputGiftValue,
          userId: user.id,
        }

        this.giftService.createGift(nuevoRegalo).pipe(
          catchError((error: string) => {
            this.errorMessage = error;
            return EMPTY; // Manejo del error
          })
        ).subscribe({
          next: () => {
            console.log('Regalo Creado');         
          }
        });

      },
      error: (error: any) => {
        console.error('Error al crear el usuario:', error);
      }
    });
  } 
}
