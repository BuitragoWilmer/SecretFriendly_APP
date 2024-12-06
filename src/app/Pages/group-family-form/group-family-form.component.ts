import { Component, Injectable, OnInit } from '@angular/core';
import { GroupFamilyService } from '../../services/group-family.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { GroupfamilyItemComponent } from '../../components/groupfamily-item/groupfamily-item.component';
import {  GroupfamilyCreateComponent} from '../../components/groupfamily-create/groupfamily-create.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { EMPTY, Observable, catchError } from 'rxjs';
import { GroupFamily, GroupFamilyList } from '../../interfaces/GroupFamily';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-group-family-form',
  standalone: true,
  imports: [ AsyncPipe, GroupfamilyItemComponent, ErrorMessageComponent, GroupfamilyCreateComponent, CommonModule],
  templateUrl: './group-family-form.component.html',
  styleUrl: './group-family-form.component.css'
})
export class GroupFamilyFormComponent implements OnInit {
  public ResultsFamily$!: Observable<GroupFamilyList>;
  public errorMessage!: string;
  mensaje: string = 'Mensaje inicial del padre';

  constructor(
    private readonly groupFamilyService: GroupFamilyService,
  ) { }

  ngOnInit(): void {
    this.obtenerData();
  } 
  Actualizarlista() {
    this.obtenerData();
  }

  obtenerData() {
    this.ResultsFamily$ = this.groupFamilyService.getGroupFamiliList().pipe(
      tap(data => console.log(data)), // Agrega esto para verificar los datos
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }

  trackByFn(index: number, item: GroupFamily): number {
    return item.id; // o cualquier propiedad única
  }
}

