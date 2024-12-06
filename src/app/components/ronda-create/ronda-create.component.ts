import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoundService } from '../../services/round.service';
import { RoundCreate } from '../../interfaces/Round';
import { catchError, EMPTY } from 'rxjs';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ronda-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ronda-create.component.html',
  styleUrl: './ronda-create.component.css'
})

export class RondaCreateComponent {
  public idGroupFamily: string | null = null;
  public UserId: number | null = null;
  public inputValue: string = '';
  public errorMessage!: string;
  @Output() invocarPadre: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly roundService: RoundService,

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idGroupFamily = params.get('idGroupFamily');
    });
  }

  crear(): void {

    const nuevoGrupo: RoundCreate = {
      description: this.inputValue
    }

    this.roundService.createRound(nuevoGrupo).pipe(
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
