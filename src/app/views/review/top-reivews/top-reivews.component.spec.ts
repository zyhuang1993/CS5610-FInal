import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReivewsComponent } from './top-reivews.component';

describe('TopReivewsComponent', () => {
  let component: TopReivewsComponent;
  let fixture: ComponentFixture<TopReivewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopReivewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReivewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
