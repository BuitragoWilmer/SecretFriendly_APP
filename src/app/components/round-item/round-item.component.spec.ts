import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundItemComponent } from './round-item.component';

describe('RoundItemComponent', () => {
  let component: RoundItemComponent;
  let fixture: ComponentFixture<RoundItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
