import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpExampleComponent } from './php-example.component';

describe('PhpExampleComponent', () => {
  let component: PhpExampleComponent;
  let fixture: ComponentFixture<PhpExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
