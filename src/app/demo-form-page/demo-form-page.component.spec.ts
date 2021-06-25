import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormPageComponent } from './demo-form-page.component';

describe('DemoFormPageComponent', () => {
  let component: DemoFormPageComponent;
  let fixture: ComponentFixture<DemoFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
