import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinUpdateComponent } from './medecin-update.component';

describe('MedecinUpdateComponent', () => {
  let component: MedecinUpdateComponent;
  let fixture: ComponentFixture<MedecinUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinUpdateComponent]
    });
    fixture = TestBed.createComponent(MedecinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
