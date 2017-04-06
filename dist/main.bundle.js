webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(160);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagment_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        localStorage.clear();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(224),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagment_service__["a" /* UserManagmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagment_service__["a" /* UserManagmentService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
    }
    return Post;
}());

//# sourceMappingURL=Post.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, create_date, id) {
        this.username = username;
        this.password = password;
        this.create_date = create_date;
        this.id = id;
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Models_Topic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Models_Post__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_Topic_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopicFormComponent = (function () {
    function TopicFormComponent(topicService, router) {
        this.topicService = topicService;
        this.router = router;
        this.topic = new __WEBPACK_IMPORTED_MODULE_1_app_Models_Topic__["a" /* Topic */](0);
        this.post = new __WEBPACK_IMPORTED_MODULE_2_app_Models_Post__["a" /* Post */]();
    }
    TopicFormComponent.prototype.ngOnInit = function () {
    };
    TopicFormComponent.prototype.isValid = function () {
        return this.topic.title != '' && this.post.body != '';
    };
    TopicFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.isValid) {
            this.topic.date_posted = new Date();
            this.topic.lastPostDate = new Date();
            this.post.create_date = new Date();
            var data = {
                topic: this.topic,
                post: this.post,
                token: localStorage.getItem("id_token")
            };
            this.topicService.createTopic(data).subscribe(function (res) {
                console.log(res);
                //var body= res.json()
                if (res.insertId) {
                    _this.router.navigate(["/topic"], { queryParams: { id: res.insertId } });
                }
            });
        }
    };
    return TopicFormComponent;
}());
TopicFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topicform',
        template: __webpack_require__(226),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_Topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_Topic_service__["a" /* TopicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TopicFormComponent);

var _a, _b;
//# sourceMappingURL=TopicForm.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagment_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(229),
        styles: [__webpack_require__(221)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagment_service__["a" /* UserManagmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_UserManagment_service__["a" /* UserManagmentService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_header_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TopicList_TopicList_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_Topic_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_Services_UserManagment_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__UserForm_UserForm_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Topic_Topic_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_app_routes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__TopicForm_TopicForm_component__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__TopicList_TopicList_component__["a" /* TopicListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__UserForm_UserForm_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Topic_Topic_component__["a" /* TopicComponent */],
            __WEBPACK_IMPORTED_MODULE_13__TopicForm_TopicForm_component__["a" /* TopicFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12_app_app_routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__Services_Topic_service__["a" /* TopicService */], __WEBPACK_IMPORTED_MODULE_9_app_Services_UserManagment_service__["a" /* UserManagmentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_TopicList_TopicList_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Topic_Topic_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_UserForm_UserForm_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_0_app_TopicList_TopicList_component__["a" /* TopicListComponent */]
    },
    {
        path: "topic",
        component: __WEBPACK_IMPORTED_MODULE_1_app_Topic_Topic_component__["a" /* TopicComponent */]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_2_app_UserForm_UserForm_component__["a" /* UserFormComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default\" role=\"navigation\">\n   <!-- Brand and toggle get grouped for better mobile display -->\n   <div class=\"navbar-header\">\n     <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n       <span class=\"sr-only\">Toggle navigation</span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n     </button>\n     <a class=\"navbar-brand\" href=\"#\">Liveboards</a>\n   </div>\n \n   <!-- Collect the nav links, forms, and other content for toggling -->\n   <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n     <ul class=\"nav navbar-nav\">\n       <li ><a href=\"#\">Link</a></li>\n       <li><a href=\"#\">Link</a></li>\n     </ul>\n      \n     <form class=\"navbar-form col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n       <div class=\"input-group\">\n         \n          \n          <span class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-default\">Search</button>\n          </span>\n          \n          <input type=\"text\" class=\"form-control\">\n       </div>\n     </form>\n     \n      \n     \n     <ul  class=\"nav navbar-nav navbar-right\">\n        <ng-container *ngIf=\"userService.isLogedIn; else elseTemplate\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li><a href=\"#\" (click)=\"logOut()\" >Log Out</a></li>\n          </ul>\n        </li>\n        </ng-container>\n         <ng-template #elseTemplate>\n          <li ><a href=\"#\"  [routerLink]=\"['login']\" >Login</a></li>\n          <li><a href=\"#\">Register</a></li>\n          </ng-template>\n     </ul>\n    \n   </div><!-- /.navbar-collapse -->\n </nav>\n\n\n "

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isNew; else elseTemplate\">\n  <div>\n    <app-topicform></app-topicform>\n  </div>\n</ng-container>\n <ng-template #elseTemplate>\n <div>\n    <div class=\"panel panel-success\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Panel title</h3>\n        </div>\n        <div class=\"panel-body\">\n          <h3> {{topic.title}}</h3>     \n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of postList\">\n              <td class=\"text-center\">\n                  <p>{{post.body}}</p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        </div>\n    </div>\n    \n\n </div>\n </ng-template>"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>New Topic</h1>\n    <form (ngSubmit)=\"onSubmit()\" #topicForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"topic.title\" name=\"title\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"message\">Message</label>\n        <textarea  class=\"form-control\" id=\"message\"rows=\"20\" cols=\"60\" [(ngModel)]=\"post.body\" name=\"body\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    \n    </form>\n</div>"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = " \n <div class=\"row\" *ngIf=\"um.isLogedIn\">\n     <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n             <button type=\"button\" [routerLink]=\"['topic']\" class=\"btn btn-default\">Start New Topic</button>\n     </div>\n </div>\n <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Panel title</h3>\n        </div>\n        <div class=\"panel-body\">\n              <table class=\"table table-striped  table-bordered table-hover table-default\">\n                <thead>\n                    <tr>\n                        <th>Topics</th>\n                        <th>Posted</th>\n                        <th>Resplies</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let topic of topics\">\n                        <td><a [routerLink]=\"['/topic']\" [queryParams]=\"{ id: topic.id }\">{{topic.title}}</a></td>\n                        <td>{{topic.date_posted}}</td>\n                        <td>{{topic.id}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n  </div>"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    \t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t<div class=\"panel panel-login\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t<a href=\"#\" id=\"register-form-link\">Register</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n                {{message}}  \n\t\t\t\t\t\t\t\t<form id=\"login-form\" (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\" role=\"form\" style=\"display: block;\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\"  [(ngModel)]=\"model.password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"remember\"> Remember Me</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-primary\" value=\"Log In\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://phpoll.com/recover\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                  \n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<form id=\"register-form\" action=\"http://phpoll.com/register/process\" method=\"post\" role=\"form\" style=\"display: none;\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n \n\n\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<router-outlet></router-outlet>\n </div>\n\n"

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt_angular2_jwt__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserManagmentService = (function () {
    function UserManagmentService(http) {
        this.http = http;
        this.logedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false);
        this.$logedIn = this.logedIn.asObservable();
    }
    UserManagmentService.prototype.login = function (user) {
        var _this = this;
        user.create_date = new Date();
        console.log(JSON.stringify(user));
        return this.http.post("/api/login", user)
            .map(function (res) {
            var body = res.json();
            console.log(res.json());
            if (body.success) {
                localStorage.setItem('id_token', body.token);
                _this.logedIn.next(true);
                console.log('sent');
            }
            ;
            return body;
        });
    };
    Object.defineProperty(UserManagmentService.prototype, "isLogedIn", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt_angular2_jwt__["tokenNotExpired"])("id_token");
        },
        enumerable: true,
        configurable: true
    });
    return UserManagmentService;
}());
UserManagmentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserManagmentService);

var _a;
//# sourceMappingURL=UserManagment.service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Models_Topic__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicService = (function () {
    function TopicService(http) {
        this.http = http;
    }
    TopicService.prototype.getTopics = function () {
        return this.http.get("/api/getTopics")
            .map(function (response) {
            var body = response.json();
            var topics = new Array();
            for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
                var item = body_1[_i];
                topics.push(new __WEBPACK_IMPORTED_MODULE_3_app_Models_Topic__["a" /* Topic */](item.id, item.title, item.created_by));
            }
            return topics;
        });
    };
    TopicService.prototype.getTopicById = function (id) {
        var params = new URLSearchParams();
        params.set("id", id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            search: params // <-----
        });
        return this.http.get("/api/getTopic/" + id)
            .map(function (response) {
            var body = response.json();
            console.log(body);
            for (var p in body.post) {
                // console.log(p)
            }
            return body;
        });
    };
    TopicService.prototype.createTopic = function (data) {
        return this.http.post("/api/createTopic", data).map(function (res) {
            var body = res.json();
            return body;
        });
    };
    return TopicService;
}());
TopicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], TopicService);

var _a;
//# sourceMappingURL=Topic.service.js.map

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = (function () {
    function Topic(id, title, created_by, replies, date_posted, lastPostDate) {
        this.id = id;
        this.title = title;
        this.created_by = created_by;
        this.replies = replies;
        this.date_posted = date_posted;
        this.lastPostDate = lastPostDate;
    }
    return Topic;
}());

//# sourceMappingURL=Topic.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_Topic_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Models_Topic__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicComponent = (function () {
    function TopicComponent(route, topicService) {
        this.route = route;
        this.topicService = topicService;
        this.topic = new __WEBPACK_IMPORTED_MODULE_3_app_Models_Topic__["a" /* Topic */](0);
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'] || null;
            console.log("id is " + params['id']);
            if (_this.id == null) {
                _this.isNew = true;
                console.log("NEw post");
            }
            else {
                _this.topicService.getTopicById(_this.id).subscribe(function (data) {
                    _this.topic = data.topic;
                    _this.postList = data.posts;
                    _this.isNew = false;
                    console.log(_this.postList);
                });
            }
        });
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__(225),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_Topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_Topic_service__["a" /* TopicService */]) === "function" && _b || Object])
], TopicComponent);

var _a, _b;
//# sourceMappingURL=Topic.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_Topic_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagment_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicListComponent = (function () {
    function TopicListComponent(ts, um) {
        this.ts = ts;
        this.um = um;
    }
    TopicListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getTopics().subscribe(function (data) {
            _this.topics = data;
        });
    };
    return TopicListComponent;
}());
TopicListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topiclist',
        template: __webpack_require__(227),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_Topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_Topic_service__["a" /* TopicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagment_service__["a" /* UserManagmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagment_service__["a" /* UserManagmentService */]) === "function" && _b || Object])
], TopicListComponent);

var _a, _b;
//# sourceMappingURL=TopicList.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Models_User__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagment_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = (function () {
    function UserFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_1_app_Models_User__["a" /* User */]('', '');
    }
    UserFormComponent.prototype.ngOnInit = function () {
        if (this.userService.isLogedIn) {
            this.router.navigate(["/"]);
        }
    };
    UserFormComponent.prototype.isValid = function () {
        return this.model.username != ''
            && this.model.password != '';
    };
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message = '';
        if (this.isValid()) {
            this.userService.login(this.model).subscribe(function (res) {
                if (!res.success) {
                    _this.message = res.message;
                }
                else {
                    _this.router.navigate(["/"]);
                    console.log("redirect");
                    _this.model.username = '';
                    _this.model.password = '';
                }
            });
        }
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userform',
        template: __webpack_require__(228),
        styles: [__webpack_require__(220)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagment_service__["a" /* UserManagmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_UserManagment_service__["a" /* UserManagmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserFormComponent);

var _a, _b;
//# sourceMappingURL=UserForm.component.js.map

/***/ })

},[494]);
//# sourceMappingURL=main.bundle.js.map