import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAllReposComponent } from './github-all-repos.component';

describe('GithubAllReposComponent', () => {
  let component: GithubAllReposComponent;
  let fixture: ComponentFixture<GithubAllReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubAllReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubAllReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
