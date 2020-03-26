import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IviChatComponent } from './ivi-chat.component';

describe('IviChatComponent', () => {
  let component: IviChatComponent;
  let fixture: ComponentFixture<IviChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IviChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IviChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
