import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NeuerEintragComponent} from './neuer-eintrag.component';

describe('NeuerEintragComponent', () => {
  let component: NeuerEintragComponent;
  let fixture: ComponentFixture<NeuerEintragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NeuerEintragComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerEintragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
