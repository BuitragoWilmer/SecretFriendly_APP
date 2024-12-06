import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRondaComponent } from './start-ronda.component';

describe('StartRondaComponent', () => {
  let component: StartRondaComponent;
  let fixture: ComponentFixture<StartRondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartRondaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartRondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
