import { Component } from '@angular/core';
import { IonicPage, ActionSheetController, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage} from '../edit-shopping-item/edit-shopping-item';
import { AddShoppingPage } from '../add-shopping/add-shopping';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(private afAuth: AngularFireAuth,
     private toast: ToastController,
     public navCtrl: NavController,
      public navParams: NavParams,
    private database: AngularFireDatabase,
  private actionSheetCtrl: ActionSheetController) {

      this.shoppingListRef$ = this.database.list('shopping-list');

  }
  selectShoppingItem(shoppingItem: ShoppingItem){
    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons:[
        {
          text: 'Edit',
          handler:() => {
            // sen the user to the EditShopping Item page-shopping-list
            this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.$key });

          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.shoppingListRef$.remove(shoppingItem.$key);

          }
        },
        {
          text:'Cancel',
          role: 'calcel',
          handler:() => {
            console.log("The user has selected the cancel button")
          }
        }
      ]

    }).present();

  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data =>{
      if (data && data.email && data.uid){
      this.toast.create({
          message: `Welcome to APP, ${data.email}`,
          duration: 3000
        }).present();
  }
  else{
    this.toast.create({
        message: `Não encontramos seu usuário`,
        duration: 3000
      }).present();
  }
});
}
navigateToAddShoppingPage(){
  this.navCtrl.push(AddShoppingPage)
}
}
