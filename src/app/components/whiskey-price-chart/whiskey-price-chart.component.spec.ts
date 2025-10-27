import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyPriceChartComponent } from './whiskey-price-chart.component';

describe('WhiskeyPriceChartComponent', () => {
  let component: WhiskeyPriceChartComponent;
  let fixture: ComponentFixture<WhiskeyPriceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiskeyPriceChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiskeyPriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
