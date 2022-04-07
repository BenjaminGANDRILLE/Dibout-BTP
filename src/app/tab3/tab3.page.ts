import { Component } from '@angular/core';
import { LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  press : any
 loading =  this.loadingController.create({
  cssClass: 'my-custom-class',
  message: 'Chargement...'
});
MenuExample: any;

  constructor(
    public nav: NavController,
    public loadingController: LoadingController) 
    {
    this.getRevues()
  }
  goDetail(id : any){
    console.log(id)
    this.nav.navigateForward('/detail-revue', { state: id });
  }

  async getRevues(){
    
     (await this.loading).present();

    console.log('Loading dismissed!');

    var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=mjl2um438p409o7d1n50q64hl8; wcUserSettings=%7B%7D");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  
};

fetch("https://dibout-btp.fr/wp-json/wp/v2/posts", requestOptions)
  .then(response => response.json())
  .then(async (result) => {
    console.log(result);
    this.press = result;
    (await this.loading).dismiss();
  })
  .catch(error => console.log('error', error));
  }

}
