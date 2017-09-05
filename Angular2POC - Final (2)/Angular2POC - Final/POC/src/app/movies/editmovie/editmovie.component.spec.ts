import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { EditmovieComponent } from './editmovie.component';

describe('EditmovieComponent', () => {
  let component: EditmovieComponent;
  let fixture: ComponentFixture<EditmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpModule],
      declarations: [ EditmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
