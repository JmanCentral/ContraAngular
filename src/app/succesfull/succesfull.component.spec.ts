import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullComponent } from './succesfull.component';

describe('SuccesfullComponent', () => {
  let component: SuccesfullComponent;
  let fixture: ComponentFixture<SuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccesfullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
