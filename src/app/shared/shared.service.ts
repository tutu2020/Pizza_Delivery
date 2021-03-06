import {Component, Injectable, Input, Output, EventEmitter} from '@angular/core'


@Injectable()
export class sharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  
  change(obj:any) {
    this.fire.emit(obj);
  }

  
  getEmittedValue() {
    return this.fire;
  }
  
} 
