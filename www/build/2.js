webpackJsonp([2],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_shopping_add_shopping__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(afAuth, toast, navCtrl, navParams, database, actionSheetCtrl, menuCtrl) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menuCtrl = menuCtrl;
        this.shoppingListRef$ = this.database.list('shopping-list');
    }
    HomePage.prototype.selectShoppingItem = function (shoppingItem) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "" + shoppingItem.nomeServico,
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        // sen the user to the EditShopping Item page-shopping-list
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: shoppingItem.$key });
                    }
                },
                {
                    text: 'Excluir',
                    role: 'destructive',
                    handler: function () {
                        _this.shoppingListRef$.remove(shoppingItem.$key);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'calcel',
                    handler: function () {
                        console.log("The user has selected the cancel button");
                    }
                }
            ]
        }).present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Bem Vindo ao FastJob, " + data.email,
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: "N\u00E3o encontramos seu usu\u00E1rio",
                    duration: 3000
                }).present();
            }
        });
    };
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.navigateToAddShoppingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_shopping_add_shopping__["a" /* AddShoppingPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\home\home.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color = "primary">\n\n    <ion-title>Serviços</ion-title>\n\n    <ion-menu [content]="mycontent" > Teste </ion-menu>\n\n    <ion-nav #mycontent [root]="AddShoppingPage"></ion-nav>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button icon-only menuClose (click) = "openMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n\n\n    <ion-buttons end>\n\n\n\n      <button ion-button icon-only (click) ="navigateToAddShoppingPage()">\n\n        <ion-icon name="add"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor = "let item of shoppingListRef$ | async" (click) = "selectShoppingItem(item)">\n\n\n\n      <h2> <b> Serviço : </b> {{item.nomeServico}} </h2>\n\n      <h2> Valor : {{item.valorServico}}</h2>\n\n      <h2> Data : {{item.dataServico | date: \'dd/MM/yyyy\'}}  </h2>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map