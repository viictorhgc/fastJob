import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage} from '../edit-shopping-item/edit-shopping-item';



@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController
) {
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

  navigateToAddShoppingPage(){
    this.navCtrl.push(AddShoppingPage)
  }
}
