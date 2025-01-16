import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorFormTemplateComponent } from './actor-form-template.component';

describe('ActorFormTemplateComponent', () => {
  let component: ActorFormTemplateComponent;
  let fixture: ComponentFixture<ActorFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorFormTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
