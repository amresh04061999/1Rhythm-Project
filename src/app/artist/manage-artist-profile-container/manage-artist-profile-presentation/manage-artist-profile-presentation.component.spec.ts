import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageArtistProfilePresentationComponent } from './manage-artist-profile-presentation.component';

describe('ManageArtistProfilePresentationComponent', () => {
  let component: ManageArtistProfilePresentationComponent;
  let fixture: ComponentFixture<ManageArtistProfilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageArtistProfilePresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageArtistProfilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
