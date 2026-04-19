import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { CoverLetter } from './cover-letter';

describe('CoverLetter', () => {
  let component: CoverLetter;
  let fixture: ComponentFixture<CoverLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetter],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideNoopAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
