import { Component } from '@angular/core';
import { CalendarComponentOptions , CalendarModalOptions} from 'ion2-calendar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    events 
  date : string[];
  dateRange: { from: string; to: string; };
  type: 'string';
  options: CalendarModalOptions = {
    monthFormat: ' MMM YYYY ',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  
    weekStart: 1,
    pickMode: 'multi',
    defaultDate: new Date(),
  };

  optionsMulti: CalendarComponentOptions = {
    monthFormat: ' MMM YYYY ',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthPickerFormat :['Jan','Fev','Mar','Avr','Mai','Juin','Jui','Aout','Sep','Oct','Nov','Dec'],
    weekStart: 1,
    pickMode: 'multi',
    
  };
  constructor() {
      this.getEvents()
  }

getEvents(){
    let myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=mjl2um438p409o7d1n50q64hl8; wcUserSettings=%7B%7D");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    
    fetch("https://dibout-btp.fr/wp-json/wp/v2/pec-events", requestOptions)
      .then(response => response.json())
      .then(async (result) => {
          this.events = result;
      })
      .catch(error => console.log('error', error));
      }

  onChange($event) {
    console.log("ok")
    console.log($event);
  };

  

}
