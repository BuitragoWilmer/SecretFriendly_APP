import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoundListResponse } from '../../interfaces/Round';

@Component({
  selector: 'app-round-item',
  imports: [RouterLink],
  templateUrl: './round-item.component.html',
  styleUrl: './round-item.component.css'
})
export class RoundItemComponent {
  @Input() RoundInfo!: RoundListResponse;
  public RoundId: number =0

  ngOnInit(): void {
    this.RoundId =  this.RoundInfo.RoundId;
  }
}
