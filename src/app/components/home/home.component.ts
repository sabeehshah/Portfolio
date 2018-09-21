import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-image': "url('/assets/image1.jpg')"
    }

    this.myParams = {
      "particles": {
        "number": {
          "value": 100
        },
        "color": {
          "value": "#f9f3f4"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 1,
            "color": "#CCC"
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true
        },
        "size": {
          "value": 2
        },
        "line_linked": {
          "enable": true,
          "distance": 110
        },
        "move": {
          "enable": true,
          "speed": 2
        }

      }
    }

   
  }

}
