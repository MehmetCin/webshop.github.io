import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Organisation } from 'src/app/models/organisation.model';
import { NpoCardsComponent } from './npo-cards.component';

describe('NpoCardsComponent', () => {
  let component: NpoCardsComponent;
  let fixture: ComponentFixture<NpoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
