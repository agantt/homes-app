import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './home.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomesComponent]
    });
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
