import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../ngrx/app.reducer';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
      ],
      providers: [provideMockStore({initialState})]
    });
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a record of emails', () => {
    expect(service.getEmailsJSON()).not.toThrowError;
  })
});
