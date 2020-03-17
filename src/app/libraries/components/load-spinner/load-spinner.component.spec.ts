import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadSpinnerComponent } from './load-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('LoadSpinnerComponent', () => {
  let component: LoadSpinnerComponent;
  let fixture: ComponentFixture<LoadSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule
      ],
      declarations: [LoadSpinnerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Spinner Component', () => {
    expect(component).toBeTruthy();
  });
});
