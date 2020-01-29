import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnimedPage } from './unimed.page';

describe('UnimedPage', () => {
  let component: UnimedPage;
  let fixture: ComponentFixture<UnimedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnimedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnimedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
