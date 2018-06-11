import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalitiesComponent } from './formalities.component';

describe('FormalitiesComponent', () => {
  let component: FormalitiesComponent;
  let fixture: ComponentFixture<FormalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
