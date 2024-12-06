import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AssigmentService } from '../../services/assigment.service';
import { GiftService } from '../../services/gift.service';
import { secretUserAssigmentRequest, secretUserAssigmentResponse } from '../../interfaces/Assigment';
import { GiftbyUserResponse } from '../../interfaces/Gift';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-secret-friendly',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './secret-friendly.component.html',
  styleUrl: './secret-friendly.component.css'
})
export class SecretFriendlyComponent {
  public userId: number | null = null;
  public roundId: number | null = null;
  public key: string = '';
  public errorMessage!: string;
  SecretFriendly: secretUserAssigmentResponse | null = null;
  public code: number = 0;
  public mensaje: string = '';
  public regalo: string = '';

  constructor(
    private readonly assigmentService: AssigmentService,
    private readonly giftService: GiftService
  ) {}

  consultar(): void {

    const secretUser: secretUserAssigmentRequest = {
      userId: this.userId,
      key: this.key,
      roundId: this.roundId,
    }

    this.assigmentService.GetFriendlySecret(secretUser).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY; // Manejo del error
      })
    ).subscribe({
      next: (SecretFriendly: secretUserAssigmentResponse) => {

        this.SecretFriendly = SecretFriendly;
        this.code = SecretFriendly.code;
        this.mensaje = SecretFriendly.mensaje;

        this.giftService.getGiftbyUser(SecretFriendly.assigments.secretSantaId).pipe(
          catchError((error: string) => {
            this.errorMessage = error;
            return EMPTY; // Manejo del error
          })
        ).subscribe({
          next: (Gift: GiftbyUserResponse) => {
            this.regalo =Gift.message;
            console.log('Regalo obtenido');         
          }
        });
    },
      error: (error: any) => {
        console.error('Error al crear el usuario:', error);
      }
    });
  } 
}



