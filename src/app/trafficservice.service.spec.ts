import { TestBed } from '@angular/core/testing';

import { TrafficserviceService } from './trafficservice.service';

describe('TrafficserviceService', () => {
  let service: TrafficserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
