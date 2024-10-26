import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturepostComponent } from './picturepost.component';

describe('PicturepostComponent', () => {
  let component: PicturepostComponent;
  let fixture: ComponentFixture<PicturepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicturepostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
