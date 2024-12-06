import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaCreateComponent } from './ronda-create.component';

describe('RondaCreateComponent', () => {
  let component: RondaCreateComponent;
  let fixture: ComponentFixture<RondaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RondaCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RondaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
