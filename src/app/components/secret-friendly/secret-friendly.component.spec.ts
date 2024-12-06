import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretFriendlyComponent } from './secret-friendly.component';

describe('SecretFriendlyComponent', () => {
  let component: SecretFriendlyComponent;
  let fixture: ComponentFixture<SecretFriendlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretFriendlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
