import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxComponent } from './inbox.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../ngrx/app.reducer';
import { RouterModule } from '@angular/router';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;
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
      declarations: [ InboxComponent ],
      providers: [
        provideMockStore({ initialState: { appState: state }}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ')
});
