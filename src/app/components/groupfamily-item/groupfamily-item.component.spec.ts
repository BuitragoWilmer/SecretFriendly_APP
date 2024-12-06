import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupfamilyItemComponent } from './groupfamily-item.component';

describe('GroupfamilyItemComponent', () => {
  let component: GroupfamilyItemComponent;
  let fixture: ComponentFixture<GroupfamilyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupfamilyItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupfamilyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
