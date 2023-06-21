import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDogComponent } from './another-dog.component';

describe('AnotherDogComponent', () => {
  let component: AnotherDogComponent;
  let fixture: ComponentFixture<AnotherDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherDogComponent]
    });
    fixture = TestBed.createComponent(AnotherDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
