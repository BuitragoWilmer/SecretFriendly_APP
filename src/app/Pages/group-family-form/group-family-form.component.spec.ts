import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFamilyFormComponent } from './group-family-form.component';

describe('GroupFamilyFormComponent', () => {
  let component: GroupFamilyFormComponent;
  let fixture: ComponentFixture<GroupFamilyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFamilyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFamilyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
