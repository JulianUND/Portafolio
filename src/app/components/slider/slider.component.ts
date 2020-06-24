import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare  var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;


  constructor() { 
    this.autor = {
      nombre: "Julian Soto",
      website: "juliansotoweb.co",
      youtube: "Julian Soto Web"
    };
  }

  ngOnInit(): void {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });

    this.conseguirAutor.emit(this.autor);
    
  }

  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }
}
