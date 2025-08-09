import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmServiceComponent } from './firm-service.component';

describe('FirmServiceComponent', () => {
  let component: FirmServiceComponent;
  let fixture: ComponentFixture<FirmServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
