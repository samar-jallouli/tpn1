import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProduittComponent } from './add-produit';

describe('AddProduittComponent', () => {
  let component: AddProduittComponent;
  let fixture: ComponentFixture<AddProduittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProduittComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProduittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
