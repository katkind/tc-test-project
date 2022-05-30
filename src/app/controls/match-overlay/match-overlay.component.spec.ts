import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOverlayComponent } from './match-overlay.component';

describe('MatchOverlayComponent', () => {
  let component: MatchOverlayComponent;
  let fixture: ComponentFixture<MatchOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
