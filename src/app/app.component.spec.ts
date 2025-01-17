import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        TranslateModule.forRoot({})
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'World' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('World');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, World');
  });

  it('http testing', () => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    const httpTesting = TestBed.inject(HttpTestingController);
    const req = httpTesting.expectOne({
      method: 'GET',
      url: '/api/config',
    }, 'Request to load the configuration');
    const allGetRequests = httpTesting.match({method: 'GET'});
    for (const req of allGetRequests) {
      // Handle responding to each request.
    }
    // Look for one request that has a request body.
    const requestsWithBody = httpTesting.expectOne(req => req.body !== null);
    // Assert that no mutation requests have been issued.
    httpTesting.expectNone(req => req.method !== 'GET');
    const req_i = httpTesting.expectOne('/api/config');
    req_i.flush('Failed!', {status: 500, statusText: 'Internal Server Error'});
    // Assert that the application successfully handled the backend error.
    const req_ii = httpTesting.expectOne('/api/config');
    req_ii.error(new ProgressEvent('network error!'));
    // Assert that the application successfully handled the network error.
    // Finally, we can assert that no other requests were made.
    httpTesting.verify();
  })

  afterEach(() => {
    // Verify that none of the tests make any extra HTTP requests.
    TestBed.inject(HttpTestingController).verify();
  });
});
