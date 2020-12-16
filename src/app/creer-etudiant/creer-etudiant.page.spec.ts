import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreerEtudiantPage } from './creer-etudiant.page';

describe('CreerEtudiantPage', () => {
  let component: CreerEtudiantPage;
  let fixture: ComponentFixture<CreerEtudiantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerEtudiantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreerEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
