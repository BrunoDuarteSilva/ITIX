import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AniversariantesPage } from './aniversariantes.page';

describe('AniversariantesPage', () => {
  let component: AniversariantesPage;
  let fixture: ComponentFixture<AniversariantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniversariantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AniversariantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
