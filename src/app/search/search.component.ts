import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchval:string='radha'
  changesearchval(eventData:Event){
    
    this.searchval=(<HTMLInputElement>eventData.target).value;
    
  }

}
