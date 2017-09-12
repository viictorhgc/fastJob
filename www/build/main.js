webpackJsonp([3],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditShoppingItemPage = (function () {
    function EditShoppingItemPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        var shoppingItemId = this.navParams.get('shoppingItemId');
        console.log(shoppingItemId);
        this.shoppingItemRef$ = this.database.object("shopping-list/" + shoppingItemId);
        this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(function (shoppingItem) { return _this.shoppingItem = shoppingItem; });
    }
    EditShoppingItemPage.prototype.editShoppingItem = function (shoppingItem) {
        this.shoppingItemRef$.update(shoppingItem);
        this.navCtrl.pop();
    };
    EditShoppingItemPage.prototype.ionViewWillLeave = function () {
        this.shoppingItemSubscription.unsubscribe();
    };
    return EditShoppingItemPage;
}());
EditShoppingItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-shopping-item',template:/*ion-inline-start:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\edit-shopping-item\edit-shopping-item.html"*/'<!--\n\n  Generated template for the EditShoppingItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color= "primary">\n\n    <ion-title>{{shoppingItem.nomeServico}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n      <ion-label floating> Nome do serviço : </ion-label>\n\n      <ion-input type="text" [(ngModel)] = "shoppingItem.nomeServico"> </ion-input>\n\n    </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating> Valor : </ion-label>\n\n        <ion-input type="number"[(ngModel)] = "shoppingItem.valorServico"> </ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating> Data : </ion-label>\n\n        <ion-input type="Date"[(ngModel)] = "shoppingItem.dataServico"> </ion-input>\n\n      </ion-item>\n\n      <button ion-button block (click) = "editShoppingItem(shoppingItem)"> Edit Item </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\edit-shopping-item\edit-shopping-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], EditShoppingItemPage);

//# sourceMappingURL=edit-shopping-item.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddShoppingPage = (function () {
    function AddShoppingPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        this.shoppingItemRef$ = this.database.list('shopping-list');
    }
    AddShoppingPage.prototype.addShoppingItem = function (shoppingItem) {
        this.shoppingItemRef$.push({
            nomeServico: this.shoppingItem.nomeServico,
            valorServico: Number(this.shoppingItem.valorServico),
            dataServico: this.shoppingItem.dataServico
        });
        this.navCtrl.pop();
    };
    return AddShoppingPage;
}());
AddShoppingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-shopping',template:/*ion-inline-start:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\add-shopping\add-shopping.html"*/'<!--\n\n  Generated template for the AddShoppingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color = "primary">\n\n    <ion-title>Novo serviço</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-label floating> Categoria </ion-label>\n\n    <ion-input type="text" [(ngModel)] = "shoppingItem.nomeServico"> </ion-input>\n\n  </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating> Valor  </ion-label>\n\n      <ion-input type="number"[(ngModel)] = "shoppingItem.valorServico"> </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floationg> Data </ion-label>\n\n      <ion-input type="Date"[(ngModel)] = "shoppingItem.dataServico"> </ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button block (click) = "addShoppingItem(shoppingItem)"> Cadastrar serviço </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\add-shopping\add-shopping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AddShoppingPage);

//# sourceMappingURL=add-shopping.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		401,
		2
	],
	"../pages/login/login.module": [
		402,
		1
	],
	"../pages/register/register.module": [
		403,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(288);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credentials__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_shopping_item_edit_shopping_item__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Victor\Desktop\dev\fastJob\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Victor\Desktop\dev\fastJob\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_shopping_add_shopping__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.shoppingListRef$ = this.database.list('shopping-list');
    }
    ShoppingListPage.prototype.selectShoppingItem = function (shoppingItem) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "" + shoppingItem.nomeServico,
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        // sen the user to the EditShopping Item page-shopping-list
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: shoppingItem.$key });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        _this.shoppingListRef$.remove(shoppingItem.$key);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'calcel',
                    handler: function () {
                        console.log("The user has selected the cancel button");
                    }
                }
            ]
        }).present();
    };
    ShoppingListPage.prototype.navigateToAddShoppingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_shopping_add_shopping__["a" /* AddShoppingPage */]);
    };
    return ShoppingListPage;
}());
ShoppingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\shopping-list\shopping-list.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color = "primary">\n\n    <ion-title>ShoppingList</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click) ="navigateToAddShoppingPage()">\n\n        <ion-icon name="add"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor = "let item of shoppingListRef$ | async" (click) = "selectShoppingItem(item)">\n\n      <h2> Item Name: {{item.itemName}} </h2>\n\n      <h2> Number Item: {{item.itemNumber}}</h2>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Victor\Desktop\dev\fastJob\src\pages\shopping-list\shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ShoppingListPage);

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyC0N2Ww7mnsFo_NtwzVs2pdoxxcHBtUjs0",
    authDomain: "fastjob-508ca.firebaseapp.com",
    databaseURL: "https://fastjob-508ca.firebaseio.com",
    projectId: "fastjob-508ca",
    storageBucket: "fastjob-508ca.appspot.com",
    messagingSenderId: "152056435852"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.js.map