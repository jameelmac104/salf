import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageExtrasComponent } from './home-page-extras.component';

describe('HomePageExtrasComponent', () => {
  let component: HomePageExtrasComponent;
  let fixture: ComponentFixture<HomePageExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageExtrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
