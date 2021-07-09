import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWriterComponent } from './create-writer.component';

describe('CreateWriterComponent', () => {
  let component: CreateWriterComponent;
  let fixture: ComponentFixture<CreateWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
