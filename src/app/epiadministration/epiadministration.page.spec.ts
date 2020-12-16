import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpiadministrationPage } from './epiadministration.page';

describe('EpiadministrationPage', () => {
  let component: EpiadministrationPage;
  let fixture: ComponentFixture<EpiadministrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpiadministrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpiadministrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
