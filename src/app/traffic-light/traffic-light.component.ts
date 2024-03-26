import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {
lightState:number = 0

constructor(){}
  ngOnInit(): void {
    this.controlTrafficLights();
  }

  controlTrafficLights() {
    setInterval(() => {
      this.lightState++;
      if(this.lightState >21)
      this.lightState=0
    }, 500);
  }
  
}

