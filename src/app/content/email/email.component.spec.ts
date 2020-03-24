import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailComponent } from './email.component';
import { initialState } from '../../ngrx/app.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;
  let state = {
    ...initialState,
    inbox:{
      1: {
        id:1,
        subject: 'Hello',
        sender: 'testing@test.com',
        body: '<p>this is the email body</p>',
        tags: ['inbox'],
        date: new Date('1/1/2019'),
        isRead: false,
        deleted: true,
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [ EmailComponent ],
      providers: [
        provideMockStore({initialState: {appState: state},}),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
