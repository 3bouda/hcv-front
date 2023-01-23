import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfianceComponent } from './confiance.component';

describe('ConfianceComponent', () => {
  let component: ConfianceComponent;
  let fixture: ComponentFixture<ConfianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
