import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyCardComponent } from './whiskey-card.component';

describe('WhiskeyCardComponent', () => {
  let component: WhiskeyCardComponent;
  let fixture: ComponentFixture<WhiskeyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiskeyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiskeyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
