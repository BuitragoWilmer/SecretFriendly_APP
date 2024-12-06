import { Component, EventEmitter, Output } from '@angular/core';
import { GroupFamilyService } from '../../services/group-family.service';
import { GroupFamily, GroupFamilyCreate } from '../../interfaces/GroupFamily';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { catchError, EMPTY } from 'rxjs';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-groupfamily-create',
  standalone: true,
  imports: [ErrorMessageComponent, FormsModule],
  templateUrl: './groupfamily-create.component.html',
  styleUrl: './groupfamily-create.component.css'
})
export class GroupfamilyCreateComponent {
  public inputValue: string = ''; // Variable para almacenar el valor de la entrada
  public errorMessage!: string;
  public Results$!: GroupFamily;
  @Output() invocarPadre: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(
    private readonly groupFamilyService: GroupFamilyService,
  ) { }



  crear(): void {
    console.log(`Valor creado: ${this.inputValue}`);

    const nuevoGrupo: GroupFamilyCreate = {
      nameGroupFamily: this.inputValue
    }

    this.groupFamilyService.createGroupFamili(nuevoGrupo).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY; // Manejo del error
      })
    ).subscribe({
      next: () => {
        // Si la creación es exitosa, emite el evento
        this.invocarPadre.emit();
        console.log('Grupo familiar creado exitosamente');
      },
      error: (error) => {
        console.error('Error al crear el grupo familiar:', error);
      }
    });
  } 
}
