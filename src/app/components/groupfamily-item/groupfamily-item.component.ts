import { Component, Input, OnInit } from '@angular/core';
import { GroupFamily } from '../../interfaces/GroupFamily';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-groupfamily-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './groupfamily-item.component.html',
  styleUrl: './groupfamily-item.component.css'
})
export class GroupfamilyItemComponent implements OnInit{
  @Input() groupFamilyInfo!: GroupFamily;
  
  public UserId: number =0

  ngOnInit(): void {
    this.UserId =  this.groupFamilyInfo.id;
  }
}
