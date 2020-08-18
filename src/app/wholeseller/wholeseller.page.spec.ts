import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WholesellerPage } from './wholeseller.page';

describe('WholesellerPage', () => {
  let component: WholesellerPage;
  let fixture: ComponentFixture<WholesellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WholesellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
