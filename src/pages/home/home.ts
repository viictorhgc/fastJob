import { Component } from '@angular/core';
import { IonicPage, ActionSheetController, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
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
  private actionSheetCtrl: ActionSheetController,
    public menuCtrl : MenuController) {

      this.shoppingListRef$ = this.database.list('shopping-list');

  }
  selectShoppingItem(shoppingItem: ShoppingItem){
    this.actionSheetCtrl.create({
      title: `${shoppingItem.nomeServico}`,
      buttons:[
        {
          text: 'Editar',
          handler:() => {
            // sen the user to the EditShopping Item page-shopping-list
            this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.$key });

          }
        },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            this.shoppingListRef$.remove(shoppingItem.$key);

          }
        },
        {
          text:'Cancelar',
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
          message: `Bem Vindo ao FastJob, ${data.email}`,
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
openMenu(){
  this.menuCtrl.open();
}
navigateToAddShoppingPage(){
  this.navCtrl.push(AddShoppingPage)
}
}
