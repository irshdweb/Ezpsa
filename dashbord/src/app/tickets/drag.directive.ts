import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

   @Output() onFileDropped = new EventEmitter<any>();
	
  @HostBinding('style.background-color') public background = '#f1f1f1'
  @HostBinding('style.opacity') public opacity = '1'
	
  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#010101';
    this.opacity = '0.8'
  }
	
  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f1f1f1'
    this.opacity = '1'
  }
	
  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f1f1f1'
    this.opacity = '1'
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }
  }

}
