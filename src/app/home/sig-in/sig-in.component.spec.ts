import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigInComponent } from './sig-in.component';

describe('SigInComponent', () => {
  let component: SigInComponent;
  let fixture: ComponentFixture<SigInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigInComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
