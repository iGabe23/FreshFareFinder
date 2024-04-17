import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { setUserInfo } from '../../store/auth/auth.actions';
import { of } from 'rxjs';
import { AccountComponent } from './account.component';
import SpyObj = jasmine.SpyObj;
import { provideMockStore } from '@ngrx/store/testing';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/login.service';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let mockLoginService: SpyObj<LoginService>;
  let store: Store;

  beforeEach(() => {
    mockLoginService = jasmine.createSpyObj('LoginService', ['verifyToken']);
    TestBed.configureTestingModule({
      declarations: [AccountComponent],
      providers: [
        provideMockStore({}),
        {
          provide: LoginComponent,
          useValue: mockLoginService,
        },
      ],
      // Agrega tus módulos de NgRx aquí
    });

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should dispatch setUserInfo action when token is valid', () => {
    const mockToken = 'your-mock-token';
    const mockResponse = {
      result: 'good',
      data: { id: 'user-id', username: 'user-name' },
    };

    spyOn(component.loginService, 'verifyToken').and.returnValue(
      of(mockResponse)
    ); // Import 'of' from 'rxjs'

    component.decodeToken();

    expect(component.loginService.verifyToken).toHaveBeenCalledWith(mockToken);
    expect(store.dispatch).toHaveBeenCalledWith(
      setUserInfo({ userToken: { userId: 'user-id', userName: 'user-name' } })
    );
  });

  it('should log out when token is invalid', () => {
    const mockResponse = { result: 'bad' };

    spyOn(component.loginService, 'verifyToken').and.returnValue(
      of(mockResponse)
    ); // Import 'of' from 'rxjs'
    spyOn(component.loginService, 'logOut');

    component.decodeToken();

    expect(component.loginService.logOut).toHaveBeenCalled();
  });

  // Agrega más pruebas según tus necesidades
});
