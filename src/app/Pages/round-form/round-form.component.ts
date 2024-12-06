import { Component, OnInit } from '@angular/core';
import { RoundService } from '../../services/round.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { RoundListResponse } from '../../interfaces/Round';
import { AsyncPipe } from '@angular/common';
import { RoundItemComponent } from '../../components/round-item/round-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { RondaCreateComponent} from '../../components/ronda-create/ronda-create.component';

@Component({
  selector: 'app-round-form',
  standalone: true,
  imports: [AsyncPipe, RoundItemComponent, ErrorMessageComponent, RondaCreateComponent],
  templateUrl: './round-form.component.html',
  styleUrl: './round-form.component.css'
})
export class RoundFormComponent implements OnInit {

  public ResultsRounds$!: Observable<RoundListResponse[]>;
  public errorMessage!: string;

  constructor(
    private readonly roundService: RoundService,

  ) {}

  ngOnInit(): void {
    this.obtenerData();
  }

  Actualizarlista() {
    this.obtenerData();
  }


  obtenerData() {
    this.ResultsRounds$ = this.roundService.getRoundList().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }

}
