import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupfamilyCreateComponent } from './groupfamily-create.component';

describe('GroupfamilyCreateComponent', () => {
  let component: GroupfamilyCreateComponent;
  let fixture: ComponentFixture<GroupfamilyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupfamilyCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupfamilyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
