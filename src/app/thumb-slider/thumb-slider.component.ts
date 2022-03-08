import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-thumb-slider',
  templateUrl: './thumb-slider.component.html',
  styleUrls: ['./thumb-slider.component.scss'],
  providers: [],
})
export class ThumbSliderComponent implements OnInit {


  public currentImage: string = "assets/images/image-product-1.jpg";

  constructor() {
  }

  ngOnInit(): void {

  }
}
