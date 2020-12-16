import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Epi4infoPage } from './epi4info.page';

describe('Epi4infoPage', () => {
  let component: Epi4infoPage;
  let fixture: ComponentFixture<Epi4infoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Epi4infoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Epi4infoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
