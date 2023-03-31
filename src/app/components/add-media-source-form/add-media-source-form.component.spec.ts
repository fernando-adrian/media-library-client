import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediaSourceFormComponent } from './add-media-source-form.component';

describe('AddMediaSourceFormComponent', () => {
  let component: AddMediaSourceFormComponent;
  let fixture: ComponentFixture<AddMediaSourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMediaSourceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediaSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
