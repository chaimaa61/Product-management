import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') stock:number | null = null

  constructor(private element : ElementRef){}
   ngOnInit(): void {
     if(this.stock !== null){
      if(this.stock >= 10){
          this.element.nativeElement.style.backgroundColor='lightGreen'
      } else if(this.stock < 10 && this.stock > 0){
        this.element.nativeElement.style.backgroundColor='orange'
      }
      else{
        this.element.nativeElement.style.backgroundColor='coral'
      }
     }
   }




}
