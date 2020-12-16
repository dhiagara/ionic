import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeEtudiantPage } from './liste-etudiant.page';

describe('ListeEtudiantPage', () => {
  let component: ListeEtudiantPage;
  let fixture: ComponentFixture<ListeEtudiantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEtudiantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
