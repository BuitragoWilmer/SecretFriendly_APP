import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPrincipleComponent } from './main-principle.component';

describe('MainPrincipleComponent', () => {
  let component: MainPrincipleComponent;
  let fixture: ComponentFixture<MainPrincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPrincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
