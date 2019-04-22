(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/movie/movie-list/movie-list.component */ "./src/app/views/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/user-list/user-list.component */ "./src/app/views/user/user-list/user-list.component.ts");
/* harmony import */ var _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/movie/movie-detail/movie-detail.component */ "./src/app/views/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/movie/favorite-movie/favorite-movie.component */ "./src/app/views/movie/favorite-movie/favorite-movie.component.ts");
/* harmony import */ var _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user/follower-list/follower-list.component */ "./src/app/views/user/follower-list/follower-list.component.ts");
/* harmony import */ var _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/user/following-list/following-list.component */ "./src/app/views/user/following-list/following-list.component.ts");
/* harmony import */ var _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/review/review-new/review-new.component */ "./src/app/views/review/review-new/review-new.component.ts");
/* harmony import */ var _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/user/other-user/other-user.component */ "./src/app/views/user/other-user/other-user.component.ts");
/* harmony import */ var _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/review/review-list/review-list.component */ "./src/app/views/review/review-list/review-list.component.ts");
/* harmony import */ var _service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/authguard-user.client.service */ "./src/app/service/authguard-user.client.service.ts");
/* harmony import */ var _service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/authguard-admin.client.service */ "./src/app/service/authguard-admin.client.service.ts");
/* harmony import */ var _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/movie/movie-search/movie-search.component */ "./src/app/views/movie/movie-search/movie-search.component.ts");
/* harmony import */ var _views_user_user_review_user_review_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/user/user-review/user-review.component */ "./src/app/views/user/user-review/user-review.component.ts");
/* harmony import */ var _views_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/advertisement/advertisement.component */ "./src/app/views/advertisement/advertisement.component.ts");





















var routes = [
    // guest
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'movie', component: _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"] },
    { path: 'movie/:dbId', component: _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"] },
    { path: 'topMovies', component: _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"] },
    { path: 'search/movie/:keyword', component: _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_18__["MovieSearchComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'movie/:dbId/reviews', component: _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_15__["ReviewListComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'advertisement/:source', component: _views_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_20__["AdvertisementComponent"] },
    { path: 'advertisement', component: _views_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_20__["AdvertisementComponent"] },
    { path: 'users/:username', component: _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_14__["OtherUserComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/:username/favorite-movie', component: _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_10__["FavoriteMovieComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/:username/follower-list', component: _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_11__["FollowerListComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/:username/following-list', component: _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_12__["FollowingListComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/:username/review-list', component: _views_user_user_review_user_review_component__WEBPACK_IMPORTED_MODULE_19__["UserReviewComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'movie/:dbId/review-new', component: _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_13__["ReviewNewComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/user-list', component: _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], canActivate: [_service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardAdmin"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CS5610-final';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/review/review-new/review-new.component */ "./src/app/views/review/review-new/review-new.component.ts");
/* harmony import */ var _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/movie/movie-list/movie-list.component */ "./src/app/views/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/movie/movie-detail/movie-detail.component */ "./src/app/views/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/user/user-list/user-list.component */ "./src/app/views/user/user-list/user-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/pagination.client.service */ "./src/app/service/pagination.client.service.ts");
/* harmony import */ var _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/review/review-list/review-list.component */ "./src/app/views/review/review-list/review-list.component.ts");
/* harmony import */ var _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/movie/favorite-movie/favorite-movie.component */ "./src/app/views/movie/favorite-movie/favorite-movie.component.ts");
/* harmony import */ var _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/user/other-user/other-user.component */ "./src/app/views/user/other-user/other-user.component.ts");
/* harmony import */ var _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/user/follower-list/follower-list.component */ "./src/app/views/user/follower-list/follower-list.component.ts");
/* harmony import */ var _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/user/following-list/following-list.component */ "./src/app/views/user/following-list/following-list.component.ts");
/* harmony import */ var _service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/authguard-user.client.service */ "./src/app/service/authguard-user.client.service.ts");
/* harmony import */ var _service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/authguard-admin.client.service */ "./src/app/service/authguard-admin.client.service.ts");
/* harmony import */ var _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/movie/movie-search/movie-search.component */ "./src/app/views/movie/movie-search/movie-search.component.ts");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/review.client.service */ "./src/app/service/review.client.service.ts");
/* harmony import */ var _views_user_user_review_user_review_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/user/user-review/user-review.component */ "./src/app/views/user/user-review/user-review.component.ts");
/* harmony import */ var _views_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/advertisement/advertisement.component */ "./src/app/views/advertisement/advertisement.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_10__["ReviewNewComponent"],
                _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__["MovieListComponent"],
                _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_18__["UserListComponent"],
                _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_22__["ReviewListComponent"],
                _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_23__["FavoriteMovieComponent"],
                _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_24__["OtherUserComponent"],
                _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_25__["FollowerListComponent"],
                _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_26__["FollowingListComponent"],
                _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_29__["MovieSearchComponent"],
                _views_user_user_review_user_review_component__WEBPACK_IMPORTED_MODULE_31__["UserReviewComponent"],
                _views_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_32__["AdvertisementComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ],
            providers: [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_13__["MovieService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_17__["SharedService"], _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_21__["PaginationService"], _service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuardUser"], _service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardAdmin"], _service_review_client_service__WEBPACK_IMPORTED_MODULE_30__["ReviewService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/service/authguard-admin.client.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/authguard-admin.client.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardAdmin", function() { return AuthGuardAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.client.service */ "./src/app/service/user.client.service.ts");



var AuthGuardAdmin = /** @class */ (function () {
    function AuthGuardAdmin(userService) {
        this.userService = userService;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.userService.loggedInAsAdmin();
    };
    AuthGuardAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
}());



/***/ }),

/***/ "./src/app/service/authguard-user.client.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/authguard-user.client.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuardUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardUser", function() { return AuthGuardUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.client.service */ "./src/app/service/user.client.service.ts");



var AuthGuardUser = /** @class */ (function () {
    function AuthGuardUser(userService) {
        this.userService = userService;
    }
    AuthGuardUser.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuardUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuardUser);
    return AuthGuardUser;
}());



/***/ }),

/***/ "./src/app/service/movie.client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/movie.client.service.ts ***!
  \*************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
        this.moviedbUrl = 'https://api.themoviedb.org/3';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // tmdb
    MovieService.prototype.findNowPlayingMovies = function (page) {
        var url = this.moviedbUrl + ("/movie/now_playing?page=" + page + "&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    MovieService.prototype.findMovieDetailsById = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "?api_key=" + this.apiKey + "&language=en-US");
        return this.http.get(url);
    };
    MovieService.prototype.searchMovies = function (keyword) {
        var url = this.moviedbUrl + ("/search/movie?query=" + keyword + "&page=1&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    MovieService.prototype.getCast = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "/credits?api_key=" + this.apiKey);
        return this.http.get(url);
    };
    MovieService.prototype.findPopularMoviesByPages = function (page) {
        var url = this.moviedbUrl + ("/movie/popular?page=" + page + "&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    // own db
    MovieService.prototype.findMovieByDbId = function (dbId) {
        var url = this.baseUrl + '/api/movie/' + dbId;
        return this.http.get(url);
    };
    MovieService.prototype.createMovie = function (movie) {
        var url = this.baseUrl + '/api/movie';
        return this.http.post(url, movie);
    };
    MovieService.prototype.updateReviewUsernameInMovie = function (userId, username) {
        var url = this.baseUrl + ("/api/movie/" + userId);
        return this.http.put(url, { username: username });
    };
    MovieService.prototype.deleteUserReviewsInMovie = function (userId) {
        var url = this.baseUrl + ("/api/movie/" + userId);
        return this.http.delete(url);
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/service/pagination.client.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/pagination.client.service.ts ***!
  \******************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationService = /** @class */ (function () {
    function PaginationService() {
    }
    PaginationService.prototype.getPager = function (currentPage) {
        var totalPages = 30;
        var pageSize = 10;
        var startPage;
        var endPage;
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        }
        else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        }
        else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            currentPage: currentPage,
            totalPages: totalPages,
            pageSize: pageSize,
            startPage: startPage,
            endPage: endPage,
            pages: pages
        };
    };
    PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/service/review.client.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/review.client.service.ts ***!
  \**************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ReviewService = /** @class */ (function () {
    function ReviewService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    ReviewService.prototype.createReview = function (dbId, review) {
        var url = this.baseUrl + '/api/' + dbId + '/review';
        return this.http.post(url, review);
    };
    ReviewService.prototype.deleteReview = function (reviewId) {
        var url = this.baseUrl + '/api/review/' + reviewId;
        return this.http.delete(url);
    };
    ReviewService.prototype.incrementReviewLikes = function (review) {
        var url = this.baseUrl + '/api/review/' + review._id + '/increaseLikes';
        return this.http.put(url, '');
    };
    ReviewService.prototype.decrementReviewLikes = function (review) {
        var url = this.baseUrl + '/api/review/' + review._id + '/decreaseLikes';
        return this.http.put(url, '');
    };
    ReviewService.prototype.updateReviewUsername = function (userId, username) {
        var url = this.baseUrl + ("/api/" + userId + "/review");
        return this.http.put(url, { username: username });
    };
    ReviewService.prototype.deleteUserReviews = function (userId) {
        var url = this.baseUrl + ("/api/" + userId + "/review");
        return this.http.delete(url);
    };
    ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./src/app/service/shared.client.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/shared.client.service.ts ***!
  \**************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = null;
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/service/user.client.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/user.client.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UserService = /** @class */ (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
        this.moviedbUrl = 'https://api.themoviedb.org/3';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.options = {
            headers: this.headers,
            withCredentials: true
        };
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUserName,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUserName = function (username) {
        return this.http.get(this.baseUrl + '/api/user/username/' + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?' + 'username=' + username + '&' + 'password=' + password);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = { username: username, password: password };
        return this.http.post(this.baseUrl + '/api/login', body, this.options);
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options);
    };
    UserService.prototype.findNowPlayingMovies = function (page) {
        var url = this.moviedbUrl + ("/movie/now_playing?page=" + page + "&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    UserService.prototype.findImageByMovieId = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "/images?api_key=" + this.apiKey + "&language=en-US");
        return this.http.get(url);
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (user !== '0' && (user.type === 'Unpaid' || user.type === 'Paid' || user.type === 'Admin')) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    UserService.prototype.loggedInAsAdmin = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (user !== '0' && user.type === 'Admin') {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['']);
                return false;
            }
        }));
    };
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/register', user, this.options);
    };
    UserService.prototype.follow = function (user, target) {
        return this.http.get(this.baseUrl + '/api/follower/' + user + '/following/' + target);
    };
    UserService.prototype.unfollow = function (user, target) {
        return this.http.delete(this.baseUrl + '/api/follower/' + user + '/following/' + target);
    };
    UserService.prototype.findAllUsers = function () {
        return this.http.get(this.baseUrl + '/api/allUsers');
    };
    UserService.prototype.findFollowersByUserName = function (username) {
        return this.http.get(this.baseUrl + '/api/allFollowers/' + username);
    };
    UserService.prototype.findFollowingsByUserName = function (username) {
        return this.http.get(this.baseUrl + '/api/allFollowings/' + username);
    };
    UserService.prototype.addToFavorite = function (userId, movieId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/favorite/' + movieId);
    };
    UserService.prototype.deleteFavorite = function (userId, movieId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId + '/favorite/' + movieId);
    };
    UserService.prototype.addReview = function (userId, reviewId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/review/' + reviewId);
    };
    UserService.prototype.deleteReview = function (userId, reviewId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId + '/review/' + reviewId);
    };
    UserService.prototype.likeReview = function (userId, reviewId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/likeReview/' + reviewId);
    };
    UserService.prototype.unlikeReview = function (userId, reviewId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId + '/likeReview/' + reviewId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/advertisement/advertisement.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/advertisement/advertisement.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  text-align: center;\n}\n\n#amc {\n  float: left;\n  width: 61.2%;\n}\n\n#combo {\n  float: left;\n  width: 38.8%;\n}\n\n#ticket {\n  float: left;\n  width: 38.8%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWR2ZXJ0aXNlbWVudC9hZHZlcnRpc2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hZHZlcnRpc2VtZW50L2FkdmVydGlzZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYW1jIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MS4yJTtcbn1cblxuI2NvbWJvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzOC44JTtcbn1cblxuI3RpY2tldCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzguOCU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/advertisement/advertisement.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/advertisement/advertisement.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1><a href=\"https://www.amctheatres.com/\">Come to visit our site for more! <i class=\"far fa-hand-point-left\"></i></a></h1>\n  <img id=\"amc\" src=\"../../../assets/images/6.1.1.1_amc-history_promo.jpg\">\n  <img id=\"combo\" src=\"../../../assets/images/amc_stubs_5_tuesday_cameo_combo.jpg\">\n  <img id=\"ticket\" src=\"../../../assets/images/amc-ticket-2.png\">\n</div>\n"

/***/ }),

/***/ "./src/app/views/advertisement/advertisement.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/advertisement/advertisement.component.ts ***!
  \****************************************************************/
/*! exports provided: AdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementComponent", function() { return AdvertisementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdvertisementComponent = /** @class */ (function () {
    function AdvertisementComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    AdvertisementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.source = params.source;
            if (_this.source === 'login') {
                setTimeout(function () {
                    _this.router.navigate(['/profile']);
                }, 5000); // 5s
            }
            else if (_this.source === undefined) {
                setTimeout(function () {
                    _this.router.navigate(['/topMovies']);
                }, 5000); // 5s
            }
            else {
                setTimeout(function () {
                    _this.router.navigate(['/search/movie/' + _this.source]);
                }, 5000); // 5s
            }
        });
    };
    AdvertisementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advertisement',
            template: __webpack_require__(/*! ./advertisement.component.html */ "./src/app/views/advertisement/advertisement.component.html"),
            styles: [__webpack_require__(/*! ./advertisement.component.css */ "./src/app/views/advertisement/advertisement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdvertisementComponent);
    return AdvertisementComponent;
}());



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"fixed-top\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Movie Review</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"/\">Home</a>\n    </span>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"/movie\">Popular</a>\n    </span>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <div class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search for a movie\" aria-label=\"Search\" [(ngModel)]=\"keyword\" name=\"keyword\">\n        <button (click)=\"navigateToSearch()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </div>\n    </div>\n    <div>\n      <div class=\"collapse navbar-collapse float-right\">\n      <span class=\"navbar-text navbar-profile\">\n        <a class=\"nav-link\" routerLink=\"{{status}}\">{{loginOrProfile}}</a>\n      </span>\n        <span class=\"navbar-text navbar-profile\">\n        <a class=\"nav-link\" (click)=\"logout()\" *ngIf=\"loggedIn\">{{logoutMsg}}</a>\n      </span>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.keyword = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.sharedService.user === null || this.sharedService.user === undefined) {
            this.status = '/login';
            this.loginOrProfile = 'Login';
            this.topReviews = '/login';
            this.loggedIn = false;
        }
        else {
            this.status = '/profile';
            this.loginOrProfile = 'Profile';
            this.topReviews = '/topReviews';
            this.loggedIn = true;
            this.logoutPath = '';
            this.logoutMsg = 'Log Out';
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.sharedService.user = null;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.navigateToSearch = function () {
        if (this.sharedService.user === null) {
            this.router.navigate(['/login']);
        }
        else if (this.sharedService.user.type === 'Unpaid') {
            if (this.keyword === '') {
                this.router.navigate(['/advertisement']);
            }
            else {
                this.router.navigate(['/advertisement/' + this.keyword]);
            }
        }
        else {
            if (this.keyword && this.keyword !== '') {
                this.router.navigate(['/search/movie/' + this.keyword]);
            }
            else {
                this.router.navigate(['/topMovies']);
            }
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.navbar-profile {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\n.home-background {\n  background-image: url('cinema.jpg');\n  background-repeat: no-repeat;\n  height: 550px;\n  position: relative;\n  background-size: 100% 100%;\n  text-align:center;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n}\n\n/*.card-img-top {*/\n\n/*height: 30%;*/\n\n/*}*/\n\n/*li.movie-list-group-item {*/\n\n/*float: left;*/\n\n/*margin-left: 20px;*/\n\n/*width: 20%;*/\n\n/*height: 600px;*/\n\n/*}*/\n\n/*.card-title {*/\n\n/*height: 60px;*/\n\n/*overflow: hidden;*/\n\n/*}*/\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQTBEO0VBQzFELDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0Esa0JBQWtCOztBQUNoQixlQUFlOztBQUNqQixJQUFJOztBQUNKLDZCQUE2Qjs7QUFDM0IsZUFBZTs7QUFDZixxQkFBcUI7O0FBQ3JCLGNBQWM7O0FBQ2QsaUJBQWlCOztBQUNuQixJQUFJOztBQUVKLGdCQUFnQjs7QUFDZCxnQkFBZ0I7O0FBQ2hCLG9CQUFvQjs7QUFDdEIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItcHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZWRpYS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhvbWUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2luZW1hLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5cbi8qLmNhcmQtaW1nLXRvcCB7Ki9cbiAgLypoZWlnaHQ6IDMwJTsqL1xuLyp9Ki9cbi8qbGkubW92aWUtbGlzdC1ncm91cC1pdGVtIHsqL1xuICAvKmZsb2F0OiBsZWZ0OyovXG4gIC8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cbiAgLyp3aWR0aDogMjAlOyovXG4gIC8qaGVpZ2h0OiA2MDBweDsqL1xuLyp9Ki9cblxuLyouY2FyZC10aXRsZSB7Ki9cbiAgLypoZWlnaHQ6IDYwcHg7Ki9cbiAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4vKn0qL1xuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"home-background\">\n    <h1>Welcome to Movie Reivew!</h1>\n    <h2>It's movie time!</h2>\n  </div>\n  <div class=\"container\">\n    <h3>Now Playing Movies</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card media-item\">\n          <img  class=\"card-img-top\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{movie.title}}</h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>{{movie.release_date}}</p>\n            <a routerLink=\"/movie/{{movie.id}}\" class=\"card-link\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"container\">\n        <div class=\"text-center\">\n          <!-- pager -->\n          <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n            </li>\n            <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n              <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n<footer>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/pagination.client.service */ "./src/app/service/pagination.client.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, paginationService) {
        this.movieService = movieService;
        this.paginationService = paginationService;
        this.pager = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.setPage(1);
        this.status = '/login';
        this.loginOrProfile = 'login';
        this.topViewers = '/login';
    };
    HomeComponent.prototype.findNowPlayingMoviesByPages = function (page) {
        var _this = this;
        this.movieService.findNowPlayingMovies(page).subscribe(function (data) {
            _this.movies = data.results;
        });
    };
    HomeComponent.prototype.getImageUrlForAMovie = function (url) {
        return 'https://image.tmdb.org/t/p/original' + url;
    };
    HomeComponent.prototype.setPage = function (page) {
        this.pager = this.paginationService.getPager(page);
        this.findNowPlayingMoviesByPages(page);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/movie/favorite-movie/favorite-movie.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/movie/favorite-movie/favorite-movie.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nbody {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n  margin-bottom: 30px;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n  padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvZmF2b3JpdGUtbW92aWUvZmF2b3JpdGUtbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVOztFQUVWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW92aWUvZmF2b3JpdGUtbW92aWUvZmF2b3JpdGUtbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLm1lZGlhLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/movie/favorite-movie/favorite-movie.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/movie/favorite-movie/favorite-movie.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>Favorite List</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card media-item\">\n          <img  class=\"card-img-top\" *ngIf=\"movie.poster_path\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{movie.title}}</h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>{{movie.release_date}}</p>\n            <a routerLink=\"/movie/{{movie.db_id}}\" class=\"card-link\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/views/movie/favorite-movie/favorite-movie.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/movie/favorite-movie/favorite-movie.component.ts ***!
  \************************************************************************/
/*! exports provided: FavoriteMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteMovieComponent", function() { return FavoriteMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FavoriteMovieComponent = /** @class */ (function () {
    function FavoriteMovieComponent(movieService, userService, sharedService, route) {
        this.movieService = movieService;
        this.userService = userService;
        this.sharedService = sharedService;
        this.route = route;
    }
    FavoriteMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.currUser = user;
            });
            _this.userService.findUserByUserName(params['username']).subscribe(function (user) {
                _this.otherUser = user;
                _this.movies = _this.otherUser.favorite;
            });
        });
    };
    FavoriteMovieComponent.prototype.getImageUrlForAMovie = function (url) {
        if (url) {
            return 'https://image.tmdb.org/t/p/original' + url;
        }
    };
    FavoriteMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite-movie',
            template: __webpack_require__(/*! ./favorite-movie.component.html */ "./src/app/views/movie/favorite-movie/favorite-movie.component.html"),
            styles: [__webpack_require__(/*! ./favorite-movie.component.css */ "./src/app/views/movie/favorite-movie/favorite-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], FavoriteMovieComponent);
    return FavoriteMovieComponent;
}());



/***/ }),

/***/ "./src/app/views/movie/movie-detail/movie-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/movie/movie-detail/movie-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  margin-top: -10px;\n  background-image: linear-gradient(160deg, #34d8ff 20%, #3036ff 80%);\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n\n.poster {\n  height: 500px;\n}\n\n.movie-title {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  color: white;\n  text-align: left;\n}\n\n.movie-poster {\n  margin-left: 100px;\n  overflow: hidden;\n}\n\n.movie-description {\n  margin-left: -100px;\n  overflow: hidden;\n}\n\n.description-content {\n  margin-top: 20px;\n  color: white;\n  text-align: left;\n  font-size: 18px;\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.col-sm {\n  width: 250px;\n}\n\n.col-md {\n  width: 500px;\n}\n\n.icon-item {\n  margin-left: 20px;\n}\n\n.icon-item:hover {\n  cursor: pointer;\n  color: darkgrey;\n}\n\n.description-title {\n  margin-top: 30px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n}\n\n.icon-text {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  color: #fff;\n}\n\na:hover {\n  text-decoration: none;\n  color: darkgrey;\n}\n\n.card {\n  margin-left: 50px;\n  height: 10rem;\n  width: 8rem;\n}\n\nh3 {\n  color: #fff;\n  width: 56%;\n  margin-left: 40px;\n  margin-bottom: 20px;\n}\n\n.card-text {\n  font-size: 15px;\n  color: #FFFFFF;\n  text-align: center;\n}\n\n.genre {\n  margin-right: 15px;\n  color: white;\n  text-align: left;\n  font-size: 18px;\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1FQUFtRTtFQUNuRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaURBQWlEO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMzRkOGZmIDIwJSwgIzMwMzZmZiA4MCUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5cbi5wb3N0ZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW92aWUtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tb3ZpZS1wb3N0ZXIge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW92aWUtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGVzY3JpcHRpb24tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uY29sLXNtIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY29sLW1kIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4uaWNvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pY29uLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbn1cblxuLmRlc2NyaXB0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWNvbi10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDhyZW07XG59XG5oMyB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTYlO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdlbnJlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/movie/movie-detail/movie-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/movie/movie-detail/movie-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<app-header></app-header>\n<body>\n<main>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <img *ngIf=\"movie.poster_path\" class=\"poster movie-poster\" [src]=\"getImageUrl(movie.poster_path)\" alt=\"movie poster\">\n        </div>\n        <div class=\"col-md movie-description\">\n          <a href=\"{{movie.homepage}}\" class=\"movie-title\">\n            {{movie.original_title}}\n          </a>\n          <div class=\"description-content\">\n            {{movie.release_date}}\n          </div>\n          <div class=\"icon description-content\">\n            <span *ngIf=\"!averageRate\">\n              Waiting for review\n            </span>\n            <span *ngIf=\"averageRate\">\n              User Score: {{averageRate}}/5\n            </span>\n            <a *ngIf=\"currUser && movieInMongo && averageRate\" routerLink=\"/movie/{{dbId}}/reviews\" class=\"icon-item\">Reviews</a>\n            <a *ngIf=\"currUser && movieInMongo && judge()\" (click)=\"addToFavorite()\" class=\" far fa-heart icon-item\"></a>\n            <a *ngIf=\"currUser && movieInMongo && !judge()\" (click)=\"deleteFavorite()\" class=\" fas fa-heart icon-item\"></a>\n            <a *ngIf=\"currUser && movieInMongo && noReview\" (click)=\"navigateToReview()\" class=\"fas fa-pen icon-item\"></a>\n            <!--<a href=\"#\" class=\"fas fa-play icon-item\"><span class=\"icon-text\"> Play Traileir</span></a>-->\n          </div>\n          <div class=\"description-title\">\n            Genres\n          </div>\n          <span class=\"genre\" *ngFor=\"let genre of movie.genres\">\n            {{genre.name}}\n          </span>\n          <div class=\"description-title\">\n            Overview\n          </div>\n          <div class=\"description-content\">\n            {{movie.overview}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr style=\"border:2px solid #f1f1f1\">\n\n  <div class=\"container\" style=\"margin-bottom: 20px\">\n    <h3>Top Billed Cast</h3>\n    <div *ngFor=\"let cast of casts\">\n  <div class=\"card float-left\">\n    <img class=\"card-img-top\" [src]=\"getImageUrl(cast.profile_path)\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <p class=\"card-text\">{{cast.name}}</p>\n    </div>\n  </div>\n    </div>\n  </div>\n</main>\n</body>\n"

/***/ }),

/***/ "./src/app/views/movie/movie-detail/movie-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/movie/movie-detail/movie-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");






var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(movieService, userService, activatedRoute, sharedService, router) {
        var _this = this;
        this.movieService = movieService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.currUser = null;
        this.movie = null;
        this.favoriteStatus = 'Favorite';
        this.noReview = true;
        this.movie = '';
        this.activatedRoute.queryParamMap.subscribe(function (params) {
            if (params.get('refresh')) {
                _this.ngOnInit();
            }
        });
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.dbId = params.dbId;
            if (_this.sharedService.user !== null) {
                _this.currUser = _this.sharedService.user;
                for (var i = 0; i < _this.currUser.favorite.length; i++) {
                    if (_this.currUser.favorite[i].db_id === _this.dbId.toString()) {
                        _this.favoriteStatus = 'Unfavorite';
                        break;
                    }
                }
            }
            _this.movieService.getCast(_this.dbId).subscribe(function (data) {
                _this.casts = data.cast.slice(0, 6);
            });
            _this.movieService.findMovieDetailsById(_this.dbId).subscribe(function (movie) {
                _this.movie = movie;
                _this.movieService.findMovieByDbId(_this.dbId).subscribe(function (res) {
                    _this.movieInMongo = res;
                    console.log(res);
                    if (_this.movieInMongo === null) {
                        if (_this.movie !== null) {
                            _this.addToDatabase();
                        }
                    }
                    else {
                        _this.reviews = _this.movieInMongo.reviews;
                        _this.averageRate = _this.getAverageScore(_this.reviews);
                        for (var i = 0; i < _this.reviews.length; i++) {
                            if (_this.reviews[i].reviewer === _this.currUser._id) {
                                _this.noReview = false;
                                break;
                            }
                        }
                    }
                });
            });
        });
    };
    MovieDetailComponent.prototype.getImageUrl = function (url) {
        if (url) {
            return 'https://image.tmdb.org/t/p/original' + url;
        }
    };
    MovieDetailComponent.prototype.addToFavorite = function () {
        var _this = this;
        this.userService.addToFavorite(this.currUser._id, this.movieInMongo._id).subscribe(function (data) {
            _this.favoriteStatus = 'Unfavorite';
        });
        alert('Add to favorite list successfully');
    };
    MovieDetailComponent.prototype.deleteFavorite = function () {
        var _this = this;
        this.userService.deleteFavorite(this.currUser._id, this.movieInMongo._id).subscribe(function (data) {
            _this.favoriteStatus = 'Favorite';
        });
        alert('Remove movie from favorite list successfully');
    };
    MovieDetailComponent.prototype.addToDatabase = function () {
        var _this = this;
        var newMovie = {
            title: this.movie.original_title,
            rate: undefined,
            db_id: this.dbId,
            reviews: [],
            release_date: this.movie.release_date,
            overview: this.movie.overview,
            poster_path: this.movie.poster_path
        };
        this.movieService.createMovie(newMovie).subscribe(function (data) {
            _this.movieInMongo = data;
            _this.reviews = _this.movieInMongo.reviews;
            _this.averageRate = _this.getAverageScore(_this.reviews);
        });
    };
    MovieDetailComponent.prototype.navigateToReview = function () {
        this.router.navigate(['/movie/' + this.dbId.toString() + '/review-new']);
    };
    MovieDetailComponent.prototype.getAverageScore = function (reviews) {
        if (reviews === null || reviews.length === 0) {
            return null;
        }
        var sum = 0;
        for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
            var review = reviews_1[_i];
            sum += review.rate;
        }
        var rate = sum / reviews.length;
        return rate.toFixed(1);
    };
    MovieDetailComponent.prototype.judge = function () {
        if (this.favoriteStatus === 'Favorite') {
            return true;
        }
        else {
            return false;
        }
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/views/movie/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/views/movie/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/movie/movie-list/movie-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/movie/movie-list/movie-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.navbar-profile {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  padding-top: 30px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLm5hdmJhci1wcm9maWxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lZGlhLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/movie/movie-list/movie-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/movie/movie-list/movie-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>Popular</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{movie.title}}</span></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>{{movie.release_date}}</p>\n            <a routerLink=\"/movie/{{movie.id}}\" class=\"card-link\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <div class=\"container\">\n      <div class=\"text-center\">\n        <!-- pager -->\n        <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n            <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\n          </li>\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n          </li>\n          <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n            <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\n          </li>\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n          </li>\n          <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/views/movie/movie-list/movie-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/movie/movie-list/movie-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/pagination.client.service */ "./src/app/service/pagination.client.service.ts");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");




var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(paginationService, movieService) {
        this.paginationService = paginationService;
        this.movieService = movieService;
        this.pager = {};
    }
    MovieListComponent.prototype.ngOnInit = function () {
        this.setPage(1);
    };
    MovieListComponent.prototype.getMoviePoster = function () {
    };
    MovieListComponent.prototype.findPopularMoviesByPages = function (page) {
        var _this = this;
        this.movieService.findPopularMoviesByPages(page).subscribe(function (data) {
            _this.movies = data.results;
        });
    };
    MovieListComponent.prototype.getImageUrlForAMovie = function (url) {
        return 'https://image.tmdb.org/t/p/original' + url;
    };
    MovieListComponent.prototype.setPage = function (page) {
        this.pager = this.paginationService.getPager(page);
        this.findPopularMoviesByPages(page);
    };
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/views/movie/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/views/movie/movie-list/movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_pagination_client_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"], _service_movie_client_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/views/movie/movie-search/movie-search.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/movie/movie-search/movie-search.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.navbar-profile {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n  padding-top: 20px;\n;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtc2VhcmNoL21vdmllLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtc2VhcmNoL21vdmllLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItcHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZWRpYS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5oMSB7XG4gIHBhZGRpbmctdG9wOiAxODBweDtcbiAgbWFyZ2luLWxlZnQ6IDIyJTtcbiAgd2lkdGg6IDU2JTtcbn1cblxuaDIge1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG47XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/movie/movie-search/movie-search.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/movie/movie-search/movie-search.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>Search Results</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card media-item\">\n          <img  class=\"card-img-top\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{movie.title}}</h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>{{movie.release_date}}</p>\n            <a routerLink=\"/movie/{{movie.id}}\" class=\"card-link\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n<footer>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/movie/movie-search/movie-search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/movie/movie-search/movie-search.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSearchComponent", function() { return MovieSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieSearchComponent = /** @class */ (function () {
    function MovieSearchComponent(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
    }
    MovieSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.keyword = params.keyword;
            _this.movieService.searchMovies(_this.keyword).subscribe(function (data) {
                _this.movies = data.results;
            });
        });
    };
    MovieSearchComponent.prototype.getImageUrlForAMovie = function (url) {
        return 'https://image.tmdb.org/t/p/original' + url;
    };
    MovieSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-search',
            template: __webpack_require__(/*! ./movie-search.component.html */ "./src/app/views/movie/movie-search/movie-search.component.html"),
            styles: [__webpack_require__(/*! ./movie-search.component.css */ "./src/app/views/movie/movie-search/movie-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 70px;\n\n  padding-top:30px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*rating*/\n\nbody {\n  padding-top: 70px;\n}\n\n.btn-grey{\n  background-color:#D8D8D8;\n  color:#FFF;\n}\n\n.rating-block{\n  background-color:#FAFAFA;\n  border:1px solid #EFEFEF;\n  padding:15px 15px 20px 15px;\n  border-radius:3px;\n}\n\n.bold{\n  font-weight:700;\n}\n\n.padding-bottom-7{\n  padding-bottom:7px;\n}\n\n.review-block{\n  background-color:#FAFAFA;\n  border:1px solid #EFEFEF;\n  padding:15px;\n  border-radius:3px;\n  margin-bottom:15px;\n}\n\n.review-block-name{\n  font-size:12px;\n  margin:10px 0;\n}\n\n.review-block-date{\n  font-size:12px;\n}\n\n.review-block-rate{\n  font-size:13px;\n  margin-top: 5px;\n  margin-bottom:15px;\n}\n\n.review-block-title{\n  font-size:15px;\n  font-weight:700;\n  margin-bottom:10px;\n}\n\n.review-block-description{\n  font-size:13px;\n}\n\n/*bootstrap*/\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial;\n  margin: 0 auto; /* Center website */\n  max-width: 800px; /* Max width */\n  padding: 20px;\n}\n\n.heading {\n  font-size: 25px;\n  margin-right: 25px;\n}\n\n.fa {\n  font-size: 25px;\n}\n\n.checked {\n  color: orange;\n}\n\n/* Three column layout */\n\n.side {\n  float: left;\n  width: 15%;\n  margin-top: 10px;\n}\n\n.middle {\n  float: left;\n  width: 70%;\n  margin-top: 10px;\n}\n\n/* Place text to the right */\n\n.right {\n  text-align: right;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* The bar container */\n\n.bar-container {\n  width: 100%;\n  background-color: #f1f1f1;\n  text-align: center;\n  color: white;\n}\n\n/* Individual bars */\n\n.bar-5 {height: 18px; background-color: #4CAF50;}\n\n.bar-4 {height: 18px; background-color: #2196F3;}\n\n.bar-3 {height: 18px; background-color: #00bcd4;}\n\n.bar-2 {height: 18px; background-color: #ff9800;}\n\n.bar-1 {height: 18px; background-color: #f44336;}\n\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n\n@media (max-width: 400px) {\n  .side, .middle {\n    width: 100%;\n  }\n  /* Hide the right column on small screens */\n  .right {\n    display: none;\n  }\n}\n\nhr {\n  margin-top: 50px;\n}\n\n.back {\n  margin-bottom: 30px;\n}\n\n.badge {\n  margin-left: 8px;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmV2aWV3L3Jldmlldy1saXN0L3Jldmlldy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7O0VBRWhCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsVUFBVTs7RUFFVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0EsWUFBWTs7QUFDWjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUUsbUJBQW1CO0VBQ25DLGdCQUFnQixFQUFFLGNBQWM7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsd0JBQXdCOztBQUN4QjtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUEsNEJBQTRCOztBQUM1QjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBQ3BCLFFBQVEsWUFBWSxFQUFFLHlCQUF5QixDQUFDOztBQUNoRCxRQUFRLFlBQVksRUFBRSx5QkFBeUIsQ0FBQzs7QUFDaEQsUUFBUSxZQUFZLEVBQUUseUJBQXlCLENBQUM7O0FBQ2hELFFBQVEsWUFBWSxFQUFFLHlCQUF5QixDQUFDOztBQUNoRCxRQUFRLFlBQVksRUFBRSx5QkFBeUIsQ0FBQzs7QUFFaEQsa0dBQWtHOztBQUNsRztFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0EsMkNBQTJDO0VBQzNDO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXZpZXcvcmV2aWV3LWxpc3QvcmV2aWV3LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOjMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgd2lkdGg6MTAwJTtcblxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4vKnJhdGluZyovXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG4uYnRuLWdyZXl7XG4gIGJhY2tncm91bmQtY29sb3I6I0Q4RDhEODtcbiAgY29sb3I6I0ZGRjtcbn1cbi5yYXRpbmctYmxvY2t7XG4gIGJhY2tncm91bmQtY29sb3I6I0ZBRkFGQTtcbiAgYm9yZGVyOjFweCBzb2xpZCAjRUZFRkVGO1xuICBwYWRkaW5nOjE1cHggMTVweCAyMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6M3B4O1xufVxuLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OjcwMDtcbn1cbi5wYWRkaW5nLWJvdHRvbS03e1xuICBwYWRkaW5nLWJvdHRvbTo3cHg7XG59XG5cbi5yZXZpZXctYmxvY2t7XG4gIGJhY2tncm91bmQtY29sb3I6I0ZBRkFGQTtcbiAgYm9yZGVyOjFweCBzb2xpZCAjRUZFRkVGO1xuICBwYWRkaW5nOjE1cHg7XG4gIGJvcmRlci1yYWRpdXM6M3B4O1xuICBtYXJnaW4tYm90dG9tOjE1cHg7XG59XG4ucmV2aWV3LWJsb2NrLW5hbWV7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBtYXJnaW46MTBweCAwO1xufVxuLnJldmlldy1ibG9jay1kYXRle1xuICBmb250LXNpemU6MTJweDtcbn1cbi5yZXZpZXctYmxvY2stcmF0ZXtcbiAgZm9udC1zaXplOjEzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuLnJldmlldy1ibG9jay10aXRsZXtcbiAgZm9udC1zaXplOjE1cHg7XG4gIGZvbnQtd2VpZ2h0OjcwMDtcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLnJldmlldy1ibG9jay1kZXNjcmlwdGlvbntcbiAgZm9udC1zaXplOjEzcHg7XG59XG5cblxuLypib290c3RyYXAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgd2Vic2l0ZSAqL1xuICBtYXgtd2lkdGg6IDgwMHB4OyAvKiBNYXggd2lkdGggKi9cbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmZhIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY2hlY2tlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi8qIFRocmVlIGNvbHVtbiBsYXlvdXQgKi9cbi5zaWRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5taWRkbGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogUGxhY2UgdGV4dCB0byB0aGUgcmlnaHQgKi9cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIFRoZSBiYXIgY29udGFpbmVyICovXG4uYmFyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogSW5kaXZpZHVhbCBiYXJzICovXG4uYmFyLTUge2hlaWdodDogMThweDsgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDt9XG4uYmFyLTQge2hlaWdodDogMThweDsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzt9XG4uYmFyLTMge2hlaWdodDogMThweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDt9XG4uYmFyLTIge2hlaWdodDogMThweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDt9XG4uYmFyLTEge2hlaWdodDogMThweDsgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjt9XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZSB0aGUgY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5zaWRlLCAubWlkZGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAvKiBIaWRlIHRoZSByaWdodCBjb2x1bW4gb24gc21hbGwgc2NyZWVucyAqL1xuICAucmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYmFjayB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n<div class=\"container\">\n  <div class = \"row back\">\n    <h1><i class=\"fas fa-ticket-alt\" routerLink=\"/movie/{{this.dbId}}\">Movie Page</i></h1>\n  </div>\n\n  <span class=\"heading\">User Rating</span>\n  <span *ngIf=\"averageRate && averageRate > 0\" class=\"fa fa-star checked\"></span>\n  <span *ngIf=\"!averageRate || averageRate <= 0\" class=\"fa fa-star\"></span>\n  <span *ngIf=\"averageRate && averageRate > 1\" class=\"fa fa-star checked\"></span>\n  <span *ngIf=\"!averageRate || averageRate <= 1\" class=\"fa fa-star\"></span>\n  <span *ngIf=\"averageRate && averageRate > 2\" class=\"fa fa-star checked\"></span>\n  <span *ngIf=\"!averageRate || averageRate <= 2\" class=\"fa fa-star\"></span>\n  <span *ngIf=\"averageRate && averageRate > 3\" class=\"fa fa-star checked\"></span>\n  <span *ngIf=\"!averageRate || averageRate <= 3\" class=\"fa fa-star\"></span>\n  <span *ngIf=\"averageRate && averageRate > 4\" class=\"fa fa-star checked\"></span>\n  <span *ngIf=\"!averageRate || averageRate <= 4\" class=\"fa fa-star\"></span>\n\n  <p *ngIf=\"averageRate\">{{averageRate}} average based on {{reviews.length}} reviews.</p>\n  <hr style=\"border:3px solid #f1f1f1\">\n\n  <div class=\"row\">\n    <div class=\"side\">\n      <div>5 star</div>\n    </div>\n    <div class=\"middle\">\n      <div class=\"bar-container\">\n        <div class=\"bar-5\" [style.width]=\"getWidth(reviews, reviewBetweenScores, 4)\"></div>\n      </div>\n    </div>\n    <div class=\"side right\">\n      <div>{{reviewBetweenScores[4]}}</div>\n    </div>\n    <div class=\"side\">\n      <div>4 star</div>\n    </div>\n    <div class=\"middle\">\n      <div class=\"bar-container\">\n        <div class=\"bar-4\" [style.width]=\"getWidth(reviews, reviewBetweenScores, 3)\"></div>\n      </div>\n    </div>\n    <div class=\"side right\">\n      <div>{{reviewBetweenScores[3]}}</div>\n    </div>\n    <div class=\"side\">\n      <div>3 star</div>\n    </div>\n    <div class=\"middle\">\n      <div class=\"bar-container\">\n        <div class=\"bar-3\" [style.width]=\"getWidth(reviews, reviewBetweenScores, 2)\"></div>\n      </div>\n    </div>\n    <div class=\"side right\">\n      <div>{{reviewBetweenScores[2]}}</div>\n    </div>\n    <div class=\"side\">\n      <div>2 star</div>\n    </div>\n    <div class=\"middle\">\n      <div class=\"bar-container\">\n        <div class=\"bar-2\" [style.width]=\"getWidth(reviews, reviewBetweenScores, 1)\"></div>\n      </div>\n    </div>\n    <div class=\"side right\">\n      <div>{{reviewBetweenScores[1]}}</div>\n    </div>\n    <div class=\"side\">\n      <div>1 star</div>\n    </div>\n    <div class=\"middle\">\n      <div class=\"bar-container\">\n        <div class=\"bar-1\" [style.width]=\"getWidth(reviews, reviewBetweenScores, 0)\"></div>\n      </div>\n    </div>\n    <div class=\"side right\">\n      <div>{{reviewBetweenScores[0]}}</div>\n    </div>\n  </div>\n  <!-- reviews -->\n\n          <div *ngFor=\"let review of reviews\">\n            <hr>\n            <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <!-- user-->\n            <div class=\"review-block-name\">\n              <h5>By<a routerLink=\"/users/{{review.reviewerName}}\"><span class=\"badge badge-secondary\">{{review.reviewerName}}</span></a></h5>\n            </div>\n            <div class=\"review-block-date\">\n              <button *ngIf=\"!owner(review.reviewerName) && like(review.likeStatus)\" (click)=\"likeReview(review)\" class=\" far fa-thumbs-up icon-item\"></button>\n              <button *ngIf=\"!owner(review.reviewerName) && !like(review.likeStatus)\" (click)=\"unlikeReview(review)\" class=\" far fa-thumbs-down icon-item\"></button>\n              <span></span>\n            </div>\n            <h5>\n              <button *ngIf=\"owner(review.reviewerName) || admin()\" (click) = \"deleteReview(review._id)\" class=\"btn btn-block btn-primary\">\n                Delete\n              </button>\n            </h5>\n          </div>\n          <div class=\"col-sm-9\">\n            <div class=\"review-block-rate\">\n              <button *ngIf=\"review.rate > 0\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n              <button *ngIf=\"review.rate <= 0\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n\n              <button *ngIf=\"review.rate > 1\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n              <button *ngIf=\"review.rate <= 1\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n\n              <button *ngIf=\"review.rate > 2\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n              <button *ngIf=\"review.rate <= 2\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n\n              <button *ngIf=\"review.rate > 3\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n              <button *ngIf=\"review.rate <= 3\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n\n              <button *ngIf=\"review.rate > 4\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n              <button *ngIf=\"review.rate <= 4\" type=\"button\" class=\"btn btn-default btn-grey btn-xs\" aria-label=\"Left Align\">\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n              </button>\n\n            </div>\n            <div class=\"review-block-title\">{{review.title}}</div>\n            <div class=\"review-block-description\">{{review.description}}</div>\n          </div>\n        </div>\n        </div>\n</div>\n</main> <!-- /container -->\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/review.client.service */ "./src/app/service/review.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");







var ReviewListComponent = /** @class */ (function () {
    function ReviewListComponent(movieService, activateRoute, sharedService, reviewService, userService, router) {
        var _this = this;
        this.movieService = movieService;
        this.activateRoute = activateRoute;
        this.sharedService = sharedService;
        this.reviewService = reviewService;
        this.userService = userService;
        this.router = router;
        this.likedReviews = [];
        this.reviewBetweenScores = [0, 0, 0, 0, 0];
        this.activateRoute.queryParamMap.subscribe(function (params) {
            if (params.get('refresh')) {
                _this.ngOnInit();
            }
        });
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.dbId = params.dbId;
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.currUser = user;
                _this.likedReviews = user.likedReview;
                _this.movieService.findMovieByDbId(_this.dbId).subscribe(function (data) {
                    _this.movie = data;
                    _this.reviews = _this.movie.reviews;
                    _this.averageRate = _this.getAverageScore(_this.reviews);
                    _this.reviewBetweenScores = _this.reviewCountsBetween(_this.reviews);
                    if (_this.likedReviews !== undefined && _this.likedReviews.length !== 0) {
                        for (var i = 0; i < _this.reviews.length; i++) {
                            for (var j = 0; j < _this.likedReviews.length; j++) {
                                if (_this.likedReviews[j] === _this.reviews[i]._id) {
                                    _this.reviews[i].likeStatus = 'Unlike';
                                }
                            }
                        }
                    }
                });
            });
        });
    };
    ReviewListComponent.prototype.getAverageScore = function (reviews) {
        if (reviews === null || reviews.length === 0) {
            return null;
        }
        var sum = 0;
        for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
            var review = reviews_1[_i];
            sum += review.rate;
        }
        var rate = sum / reviews.length;
        return Number(rate.toFixed(1));
    };
    ReviewListComponent.prototype.reviewCountsBetween = function (reviews) {
        var stats = [0, 0, 0, 0, 0];
        for (var _i = 0, reviews_2 = reviews; _i < reviews_2.length; _i++) {
            var review = reviews_2[_i];
            var rate = review.rate;
            if (rate > 0 && rate <= 1) {
                stats[0]++;
            }
            else if (rate > 1 && rate <= 2) {
                stats[1]++;
            }
            else if (rate > 2 && rate <= 3) {
                stats[2]++;
            }
            else if (rate > 3 && rate <= 4) {
                stats[3]++;
            }
            else if (rate > 4 && rate <= 5) {
                stats[4]++;
            }
        }
        return stats;
    };
    ReviewListComponent.prototype.getWidth = function (reviews, stats, i) {
        if (reviews === null || reviews === undefined || reviews.length === 0) {
            return '0';
        }
        else {
            return (stats[i] / reviews.length) * 100 + '%';
        }
    };
    ReviewListComponent.prototype.likeReview = function (review) {
        var _this = this;
        this.reviewService.incrementReviewLikes(review).subscribe(function (data) {
            _this.userService.likeReview(_this.currUser._id, review._id).subscribe(function (res) {
                _this.router.navigate(['/movie/' + _this.dbId + '/reviews'], { queryParams: { refresh: new Date().getTime() }
                });
            });
        });
    };
    ReviewListComponent.prototype.unlikeReview = function (review) {
        var _this = this;
        this.reviewService.decrementReviewLikes(review).subscribe(function (data) {
            _this.userService.unlikeReview(_this.currUser._id, review._id).subscribe(function (res) {
                _this.router.navigate(['/movie/' + _this.dbId + '/reviews'], { queryParams: { refresh: new Date().getTime() }
                });
            });
        });
    };
    ReviewListComponent.prototype.deleteReview = function (reviewId) {
        var _this = this;
        this.reviewService.deleteReview(reviewId).subscribe(function (data) {
            _this.userService.deleteReview(_this.currUser._id, reviewId).subscribe(function (res) {
                _this.router.navigate(['/movie/' + _this.dbId + '/reviews'], { queryParams: { refresh: new Date().getTime() }
                });
            });
        });
    };
    ReviewListComponent.prototype.owner = function (username) {
        if (this.currUser.username === username) {
            return true;
        }
        else {
            return false;
        }
    };
    ReviewListComponent.prototype.like = function (status) {
        if (status === 'Like') {
            return true;
        }
        else {
            return false;
        }
    };
    ReviewListComponent.prototype.admin = function () {
        if (this.currUser.type === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    };
    ReviewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! ./review-list.component.html */ "./src/app/views/review/review-list/review-list.component.html"),
            styles: [__webpack_require__(/*! ./review-list.component.css */ "./src/app/views/review/review-list/review-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ReviewListComponent);
    return ReviewListComponent;
}());



/***/ }),

/***/ "./src/app/views/review/review-new/review-new.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/review/review-new/review-new.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmV2aWV3L3Jldmlldy1uZXcvcmV2aWV3LW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmV2aWV3L3Jldmlldy1uZXcvcmV2aWV3LW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/review/review-new/review-new.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/review/review-new/review-new.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h1>Write your review</h1>\n    <form (ngSubmit)=\"submit()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"title\" ngModel required #title=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!title.valid && title.touched\">\n      Please Enter Review Title!\n      </span>\n      <div class=\"form-group\">\n        <input type=\"number\" min=\"1\" max=\"5\" class=\"form-control\" name=\"rate\" placeholder=\"rate\" ngModel required #rate=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!rate.valid && rate.touched\">\n      Please Enter Review Rate!\n      </span>\n      <div class=\"form-group\">\n        <textarea type=\"text\" class=\"form-control\" rows=\"5\" name=\"description\" placeholder=\"description\" ngModel required #description=\"ngModel\"></textarea>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n        Please Enter your description!\n      </span>\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Submit</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/movie/{{movieDBId}}\" class=\"btn btn-block btn-success\">Cancel</a>\n      </div>\n    </form>\n\n  </div>\n</main>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/views/review/review-new/review-new.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/review/review-new/review-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReviewNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewNewComponent", function() { return ReviewNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/review.client.service */ "./src/app/service/review.client.service.ts");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");








var ReviewNewComponent = /** @class */ (function () {
    function ReviewNewComponent(sharedService, activatedRoute, userService, reviewService, router, movieService) {
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.reviewService = reviewService;
        this.router = router;
        this.movieService = movieService;
        this.userId = this.sharedService.user._id;
        this.username = this.sharedService.user.username;
    }
    ReviewNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.movieDBId = params.dbId;
            _this.movieService.findMovieByDbId(_this.movieDBId).subscribe(function (data) {
                _this.movie = data;
            });
        });
    };
    ReviewNewComponent.prototype.submit = function () {
        var _this = this;
        this.title = this.reviewForm.value.title;
        this.description = this.reviewForm.value.description;
        this.rate = this.reviewForm.value.rate;
        var review = {
            title: this.title,
            description: this.description,
            rate: this.rate,
            reviewer: this.userId,
            reviewerName: this.username,
            likes: 0,
            poster_path: this.movie.poster_path,
            db_id: this.movieDBId
        };
        this.reviewService.createReview(this.movieDBId, review).subscribe(function (data) {
            _this.userService.addReview(_this.userId, data._id).subscribe(function (res) {
                _this.router.navigate(['/movie/' + _this.movieDBId]);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ReviewNewComponent.prototype, "reviewForm", void 0);
    ReviewNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-new',
            template: __webpack_require__(/*! ./review-new.component.html */ "./src/app/views/review/review-new/review-new.component.html"),
            styles: [__webpack_require__(/*! ./review-new.component.css */ "./src/app/views/review/review-new/review-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_movie_client_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]])
    ], ReviewNewComponent);
    return ReviewNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/follower-list/follower-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/user/follower-list/follower-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9mb2xsb3dlci1saXN0L2ZvbGxvd2VyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVOztFQUVWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvZm9sbG93ZXItbGlzdC9mb2xsb3dlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIHdpZHRoOjEwMCU7XG5cbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/user/follower-list/follower-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/user/follower-list/follower-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>All {{otherUser.username}}'s Followers</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let user of users\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"user.img\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a routerLink=\"/users/{{user.username}}\">\n                <span class=\"badge badge-secondary\">\n                  {{user.username}}\n                </span>\n              </a>\n            </h5>\n            <h5 class=\"card-title\"><button *ngIf=\"currUser.username!==user.username\" (click) = \"followUser(currUser.username, user.username, user.followStatus)\"class=\"btn btn-block btn-primary\">{{user.followStatus}}</button></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p><a routerLink=\"/user/{{user.username}}/follower-list\" class=\"card-link\">Followers</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/following-list\" class=\"card-link\">Following</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/review-list\" class=\"card-link\">Review History</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/views/user/follower-list/follower-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/user/follower-list/follower-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: FollowerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowerListComponent", function() { return FollowerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");





var FollowerListComponent = /** @class */ (function () {
    function FollowerListComponent(userService, router, sharedService, route) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.route = route;
        this.route.queryParamMap.subscribe(function (params) {
            if (params.get('refresh')) {
                _this.ngOnInit();
            }
        });
    }
    FollowerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.currUser = user;
            });
            _this.userService.findUserByUserName(params['username']).subscribe(function (user) {
                _this.otherUser = user;
            });
            _this.userService.findFollowersByUserName(params['username']).subscribe(function (users) {
                _this.users = users;
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i]._id === _this.currUser._id) {
                        _this.users[i].followStatus = 'Self';
                        continue;
                    }
                    for (var j = 0; j < _this.users[i].follower.length; j++) {
                        if (_this.users[i].follower[j] === _this.currUser._id) {
                            _this.users[i].followStatus = 'Unfollow';
                        }
                    }
                }
            });
        });
    };
    FollowerListComponent.prototype.followUser = function (curr, target, follow) {
        var _this = this;
        if (follow === 'Follow') {
            this.userService.follow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/user/' + _this.otherUser.username + '/follower-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
            });
            alert('Follow successfully!');
        }
        else if (follow === 'Unfollow') {
            this.userService.unfollow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/user/' + _this.otherUser.username + '/follower-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
            });
            alert('UnFollow successfully!');
        }
    };
    FollowerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-follower-list',
            template: __webpack_require__(/*! ./follower-list.component.html */ "./src/app/views/user/follower-list/follower-list.component.html"),
            styles: [__webpack_require__(/*! ./follower-list.component.css */ "./src/app/views/user/follower-list/follower-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FollowerListComponent);
    return FollowerListComponent;
}());



/***/ }),

/***/ "./src/app/views/user/following-list/following-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/user/following-list/following-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9mb2xsb3dpbmctbGlzdC9mb2xsb3dpbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9mb2xsb3dpbmctbGlzdC9mb2xsb3dpbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/following-list/following-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/user/following-list/following-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>All Users {{otherUser.username}} is Following</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let user of users\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"user.img\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a routerLink=\"/users/{{user.username}}\">\n                <span class=\"badge badge-secondary\">\n                  {{user.username}}\n                </span>\n              </a>\n            </h5>\n            <h5 class=\"card-title\"><button *ngIf=\"currUser.username!==user.username\" (click) = \"followUser(currUser.username, user.username, user.followStatus)\"class=\"btn btn-block btn-primary\">{{user.followStatus}}</button></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p><a routerLink=\"/user/{{user.username}}/follower-list\" class=\"card-link\">Followers</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/following-list\" class=\"card-link\">Following</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/review-list\" class=\"card-link\">Review History</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/views/user/following-list/following-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/user/following-list/following-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: FollowingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingListComponent", function() { return FollowingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");





var FollowingListComponent = /** @class */ (function () {
    function FollowingListComponent(userService, router, sharedService, route) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.route = route;
        this.route.queryParamMap.subscribe(function (params) {
            if (params.get('refresh')) {
                _this.ngOnInit();
            }
        });
    }
    FollowingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.currUser = user;
            });
            _this.userService.findUserByUserName(params['username']).subscribe(function (user) {
                _this.otherUser = user;
            });
            _this.userService.findFollowingsByUserName(params['username']).subscribe(function (users) {
                _this.users = users;
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i]._id === _this.currUser._id) {
                        _this.users[i].followStatus = 'Self';
                        continue;
                    }
                    for (var j = 0; j < _this.users[i].follower.length; j++) {
                        if (_this.users[i].follower[j] === _this.currUser._id) {
                            _this.users[i].followStatus = 'Unfollow';
                        }
                    }
                }
            });
        });
    };
    FollowingListComponent.prototype.followUser = function (curr, target, follow) {
        var _this = this;
        if (follow === 'Follow') {
            this.userService.follow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/user/' + _this.otherUser.username + '/following-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
                // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
            });
            alert('Follow successfully!');
        }
        else if (follow === 'Unfollow') {
            this.userService.unfollow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/user/' + _this.otherUser.username + '/following-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
                // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
            });
            alert('UnFollow successfully!');
        }
    };
    FollowingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-following-list',
            template: __webpack_require__(/*! ./following-list.component.html */ "./src/app/views/user/following-list/following-list.component.html"),
            styles: [__webpack_require__(/*! ./following-list.component.css */ "./src/app/views/user/following-list/following-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FollowingListComponent);
    return FollowingListComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <h1>Login to start your journey</h1>\n    <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n            Please Enter Username!\n        </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n            Please Enter Password!\n        </span>\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Login</button>\n      </div>\n      <div class=\"form-group\">\n        <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\"> <span><i class=\"fab fa-facebook-square\"></i></span> Facebook </a>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/register\" class=\"btn btn-block btn-success\">Register</a>\n      </div>\n    </form>\n  </div>\n</main>\n</body>\n</html>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password).subscribe(function (user) {
            if (user === null || user.message === 'User not found or Wrong password!') {
                _this.errorFlag = true;
                _this.errorMsg = 'User does not exist or Wrong Password';
            }
            else {
                if (user.type.toString() === 'Unpaid') {
                    _this.router.navigate(['/advertisement/' + 'login']);
                }
                else {
                    _this.router.navigate(['/profile/']);
                }
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/other-user/other-user.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/user/other-user/other-user.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.user-info {\n  margin-top: 20px;\n  width: 80%;\n  margin-left: 10%;\n}\n\n.user-main {\n  margin-top: 40px;\n  /*z-index: 200;*/\n}\n\n.edit-form {\n  margin-top: 40px;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.user-follow {\n  text-align: right;\n  position: relative;\n  left: 20%;\n}\n\n.update {\n  color: white !important;\n}\n\nh1 {\n  margin-bottom: 30px;\n  color: darkmagenta;\n}\n\nh3 {\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9vdGhlci11c2VyL290aGVyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvb3RoZXItdXNlci9vdGhlci11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi51c2VyLW1haW4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICAvKnotaW5kZXg6IDIwMDsqL1xufVxuXG4uZWRpdC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWZvbGxvdyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIwJTtcbn1cblxuLnVwZGF0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcbn1cblxuaDMge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/other-user/other-user.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/user/other-user/other-user.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"container\">\n      <div class=\"row colrow user-info\">\n        <div class=\"col-sm-4 d-none d-sm-block user-main\">\n          <div class=\"media d-done d-sm-block\">\n            <div class=\"card\">\n              <img  class=\"card-img-top\" [src]=\"getUserImg()\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{otherUser.username}}</span></h5>\n                <h5 class=\"card-title\"><button *ngIf=\"currUser.username!==otherUser.username\" (click) = \"followUser(currUser.username, otherUser.username)\"class=\"btn btn-block btn-primary\">{{follow}}</button></h5>\n              </div>\n              <div class=\"card-footer\">\n                <p><a routerLink=\"/user/{{otherUser.username}}/follower-list\" class=\"card-link\">Followers</a></p>\n                <p><a routerLink=\"/user/{{otherUser.username}}/following-list\" class=\"card-link\">Following</a></p>\n                <p><a routerLink=\"/user/{{otherUser.username}}/review-list\" class=\"card-link\">Review History</a></p>\n                <p><a routerLink=\"/user/{{otherUser.username}}/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 right-form edit-form\">\n          <h1>About {{otherUser.username}}</h1>\n          <h3>{{otherUser.username}} has <span class=\"badge badge-secondary\">{{otherUser.follower.length}}</span> followers</h3>\n          <h3>{{otherUser.username}} has written <span class=\"badge badge-secondary\">{{otherUser.reviews.length}}</span> reviews</h3>\n          <h3>There are <span class=\"badge badge-secondary\">{{otherUser.favorite.length}}</span> movies in his favorite list</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/views/user/other-user/other-user.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/user/other-user/other-user.component.ts ***!
  \***************************************************************/
/*! exports provided: OtherUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherUserComponent", function() { return OtherUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");





var OtherUserComponent = /** @class */ (function () {
    function OtherUserComponent(userService, router, sharedService, route) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.route = route;
        this.currUser = { _id: '', username: 'username', password: 'password',
            img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=' +
                'format&fit=crop&w=1000&q=80', type: 'Unpaid' };
        this.otherUser = { _id: '', username: 'username', password: 'password',
            img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=' +
                'format&fit=crop&w=1000&q=80', type: 'Unpaid', follower: [], reviews: [], favorite: [] };
        this.follow = 'Follow';
        this.errorMsg = '';
        this.route.queryParamMap.subscribe(function (params) {
            if (params.get('refresh')) {
                _this.ngOnInit();
            }
        });
    }
    OtherUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.currUser = user;
                _this.followings = user.following;
            });
            _this.userService.findUserByUserName(params['username']).subscribe(function (user) {
                _this.otherUser = user;
                for (var i = 0; i < _this.followings.length; i++) {
                    if (_this.followings[i] === _this.otherUser._id) {
                        _this.follow = 'Unfollow';
                    }
                }
            });
        });
    };
    OtherUserComponent.prototype.getUserImg = function () {
        if (this.currUser.img === '') {
            return '../../../../assets/images/default-heads.jpg';
        }
        else {
            return this.currUser.img;
        }
    };
    OtherUserComponent.prototype.followUser = function (curr, target) {
        var _this = this;
        if (this.follow === 'Follow') {
            this.follow = 'Unfollow';
            this.userService.follow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/users/' + target], {
                    queryParams: { refresh: new Date().getTime() }
                });
            });
        }
        else if (this.follow === 'Unfollow') {
            this.follow = 'Follow';
            this.userService.unfollow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/users/' + target], {
                    queryParams: { refresh: new Date().getTime() }
                });
            });
        }
    };
    OtherUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-user',
            template: __webpack_require__(/*! ./other-user.component.html */ "./src/app/views/user/other-user/other-user.component.html"),
            styles: [__webpack_require__(/*! ./other-user.component.css */ "./src/app/views/user/other-user/other-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OtherUserComponent);
    return OtherUserComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.user-info {\n  margin-top: 20px;\n  width: 80%;\n  margin-left: 10%;\n}\n\n.user-main {\n  margin-top: 40px;\n  /*z-index: 200;*/\n}\n\n.edit-form {\n  margin-top: 40px;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.user-follow {\n  text-align: right;\n  position: relative;\n  left: 20%;\n}\n\n.update {\n  color: white !important;\n}\n\na:hover {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi51c2VyLW1haW4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICAvKnotaW5kZXg6IDIwMDsqL1xufVxuXG4uZWRpdC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWZvbGxvdyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIwJTtcbn1cblxuLnVwZGF0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"container\">\n      <div class=\"row colrow user-info\">\n        <div class=\"col-sm-4 d-none d-sm-block user-main\">\n          <div class=\"media d-done d-sm-block\">\n            <div class=\"card\">\n              <img  class=\"card-img-top\" [src]=\"getUserImg()\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n              </div>\n              <div class=\"card-footer\">\n                <p *ngIf=\"isAdmin\"><a routerLink=\"/user/user-list\" class=\"card-link\">Manage User</a></p>\n                <p><a routerLink=\"/user/{{user.username}}/follower-list\" class=\"card-link\">Followers</a>\n                  <!--<span class=\"user-follow\">{{user.follower.length}}</span>-->\n                </p>\n                <p><a routerLink=\"/user/{{user.username}}/following-list\" class=\"card-link\">Following</a>\n                  <!--<span class=\"user-follow\">{{user.following.length}}</span>-->\n                </p>\n                <p><a routerLink=\"/user/{{user.username}}/review-list\" class=\"card-link\">Review History</a></p>\n                <p><a routerLink=\"/user/{{user.username}}/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 right-form edit-form\">\n          <h2>Edit Your Profile</h2>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"username\" placeholder=\"{{user.username}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"password\" placeholder=\"{{user.password}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"image-URL\">URL</label>\n            <input type=\"text\" class=\"form-control\" id=\"image-URL\" [(ngModel)]=\"user.img\" placeholder=\"{{user.img}}\">\n          </div>\n          <div class=\"form-group large-input-bottom-margin\">\n            <label for=\"FormControlSelect\"><small><b>Select account type</b></small></label>\n            <select class = \"form-control\" (change)=\"filterChanged($event.target.value)\" id=\"FormControlSelect\">\n              <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.display}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <a (click)=\"updateUser()\" class=\"update btn btn-block btn-primary\">Update Your Info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/review.client.service */ "./src/app/service/review.client.service.ts");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, router, sharedService, reviewService, movieService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.reviewService = reviewService;
        this.movieService = movieService;
        this.user = { _id: '', username: 'username', password: 'password',
            img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=' +
                'format&fit=crop&w=1000&q=80', type: 'Unpaid' };
        this.errorMsg = '';
        this.filterTypes = [
            { value: 'Unpaid', display: 'User' },
            { value: 'Paid', display: 'Vip' }
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = user;
                if (_this.user.type === 'Admin') {
                    _this.isAdmin = true;
                    _this.filterTypes = [
                        { value: 'Unpaid', display: 'User' },
                        { value: 'Paid', display: 'Vip' },
                        { value: 'Admin', display: 'Admin' }
                    ];
                }
                else {
                    _this.isAdmin = false;
                }
            });
        });
    };
    ProfileComponent.prototype.getUserImg = function () {
        if (this.user.img === '') {
            return '../../../../assets/images/default-heads.jpg';
        }
        else {
            return this.user.img;
        }
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.user.type = this.selectedValue;
        this.userService.updateUser(this.user._id, this.user).subscribe(function (user) {
            _this.user = user;
            _this.router.navigate(['/profile/']);
        });
        alert('Update successfully!');
    };
    ProfileComponent.prototype.filterChanged = function (selectedValue) {
        this.selectedValue = selectedValue;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"], _service_movie_client_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIHdpZHRoOjEwMCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n    </div>\n    <h1>Register for a community membership</h1>\n    <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please Enter Username!\n    </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please Enter Password!\n      </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"v_password\" class=\"form-control\" placeholder=\"verify password\" ngModel required #v_password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!v_password.valid && v_password.touched\">\n        Please verify your password!\n      </span>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"img\" placeholder=\"image for your profile photo\" ngModel required #img=\"ngModel\">\n      </div>\n      <div class=\"form-group large-input-bottom-margin\">\n        <label for=\"FormControlSelect\"><small><b>Select account type</b></small></label>\n        <select class = \"form-control\" (change)=\"filterChanged($event.target.value)\" id=\"FormControlSelect\">\n          <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.display}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Register</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/login\" class=\"btn btn-block btn-success\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</main>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = '';
        this.filterTypes = [
            { value: 'Unpaid', display: 'User' },
            { value: 'Paid', display: 'Vip' },
        ];
        this.errorFlag = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.selectedValue = 'Unpaid';
    };
    RegisterComponent.prototype.filterChanged = function (selectedValue) {
        this.selectedValue = selectedValue;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        this.img = this.registerForm.value.img;
        if (this.v_password === this.password) {
            this.user = new Object();
            this.user.username = this.username;
            this.user.password = this.password;
            this.user.img = this.img;
            this.user.type = this.selectedValue;
            this.userService.register(this.user).subscribe(function (data) {
                if (data.message === 'User is already exist!') {
                    _this.errorFlag = true;
                    _this.errorMsg = 'User is already exist! Please use a new username!';
                }
                else {
                    // this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
                    _this.router.navigate(['/profile/']);
                }
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Password needs to be verified!';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.navbar-profile {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\n.home-background {\n  background-image: url('cinema.jpg');\n  background-repeat: no-repeat;\n  height: 550px;\n  position: relative;\n  background-size: 100% 100%;\n  text-align:center;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n}\n\n/*.card-img-top {*/\n\n/*height: 30%;*/\n\n/*}*/\n\n/*li.movie-list-group-item {*/\n\n/*float: left;*/\n\n/*margin-left: 20px;*/\n\n/*width: 20%;*/\n\n/*height: 600px;*/\n\n/*}*/\n\n/*.card-title {*/\n\n/*height: 60px;*/\n\n/*overflow: hidden;*/\n\n/*}*/\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQTZEO0VBQzdELDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0Esa0JBQWtCOztBQUNsQixlQUFlOztBQUNmLElBQUk7O0FBQ0osNkJBQTZCOztBQUM3QixlQUFlOztBQUNmLHFCQUFxQjs7QUFDckIsY0FBYzs7QUFDZCxpQkFBaUI7O0FBQ2pCLElBQUk7O0FBRUosZ0JBQWdCOztBQUNoQixnQkFBZ0I7O0FBQ2hCLG9CQUFvQjs7QUFDcEIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItcHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZWRpYS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhvbWUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2luZW1hLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5cbi8qLmNhcmQtaW1nLXRvcCB7Ki9cbi8qaGVpZ2h0OiAzMCU7Ki9cbi8qfSovXG4vKmxpLm1vdmllLWxpc3QtZ3JvdXAtaXRlbSB7Ki9cbi8qZmxvYXQ6IGxlZnQ7Ki9cbi8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cbi8qd2lkdGg6IDIwJTsqL1xuLypoZWlnaHQ6IDYwMHB4OyovXG4vKn0qL1xuXG4vKi5jYXJkLXRpdGxlIHsqL1xuLypoZWlnaHQ6IDYwcHg7Ki9cbi8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuLyp9Ki9cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"home-background\">\n    <h1>Welcome to User Management!</h1>\n    <h2>Be careful!</h2>\n  </div>\n  <div class=\"container\">\n    <h3>All Users</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let user of users\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"user.img\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              <a routerLink=\"/users/{{user.username}}\">\n                <span class=\"badge badge-secondary\">\n                  {{user.username}}\n                </span>\n              </a>\n            </h5>\n            <h5 class=\"card-title\"><button *ngIf=\"judge(user.followStatus)\"(click) = \"followUser(currUser.username, user.username, user.followStatus)\" class=\"btn btn-block btn-primary\">{{user.followStatus}}</button></h5>\n            <h5 class=\"card-title\"><button (click) = \"deleteUser(user._id)\" class=\"btn btn-block btn-danger\">Delete</button></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p><a routerLink=\"/user/{{user.username}}/follower-list\" class=\"card-link\">Followers</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/following-list\" class=\"card-link\">Following</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/review-list\" class=\"card-link\">Review History</a></p>\n            <p><a routerLink=\"/user/{{user.username}}/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n          </div>\n      </div>\n    </div>\n  </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/review.client.service */ "./src/app/service/review.client.service.ts");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");







var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, router, sharedService, route, reviewService, movieService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.route = route;
        this.reviewService = reviewService;
        this.movieService = movieService;
        this.route.queryParamMap.subscribe(function (params) {
            if (params.get('refresh')) {
                _this.ngOnInit();
            }
        });
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.currUser = user;
            });
            _this.userService.findAllUsers().subscribe(function (users) {
                _this.users = users;
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i].type === 'Admin' || _this.users[i].type === 'Paid') {
                        _this.users.splice(i, 1);
                    }
                }
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i]._id === _this.currUser._id) {
                        _this.users[i].followStatus = 'Self';
                        continue;
                    }
                    for (var j = 0; j < _this.users[i].follower.length; j++) {
                        if (_this.users[i].follower[j] === _this.currUser._id) {
                            _this.users[i].followStatus = 'Unfollow';
                        }
                    }
                }
            });
        });
    };
    UserListComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId).subscribe(function (data) {
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i]._id === userId) {
                    _this.users.splice(i, 1);
                }
            }
        });
        this.reviewService.deleteUserReviews(userId).subscribe(function (data) { });
        this.movieService.deleteUserReviewsInMovie(userId).subscribe(function (data) { });
        alert('Delete successfully!');
    };
    UserListComponent.prototype.followUser = function (curr, target, follow) {
        var _this = this;
        if (follow === 'Follow') {
            this.userService.follow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/user/user-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
                // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
            });
            alert('Follow successfully!');
        }
        else if (follow === 'Unfollow') {
            this.userService.unfollow(curr, target).subscribe(function (user) {
                _this.router.navigate(['/user/user-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
                // this.router.navigate(['/user/' + this.currUser.username + '/following-list']);
            });
            alert('UnFollow successfully!');
        }
    };
    UserListComponent.prototype.judge = function (status) {
        if (status === 'Self') {
            return false;
        }
        else {
            return true;
        }
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/views/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/views/user/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"], _service_movie_client_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-review/user-review.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/user/user-review/user-review.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body {*/\n  /*background-image: url(\"../../../../assets/images/login-background.jpg\");*/\n  /*background-repeat: no-repeat;*/\n  /*position: relative;*/\n  /*background-size: 100% 100%;*/\n  /*}*/\n  .container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n  h1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2VyLXJldmlldy91c2VyLXJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7RUFDUCwyRUFBMkU7RUFDM0UsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDaEMsSUFBSTtFQUVKO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYsaUJBQWlCO0FBQ25CO0VBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL3VzZXItcmV2aWV3L3VzZXItcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmJvZHkgeyovXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTsqL1xuICAvKmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7Ki9cbiAgLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbiAgLypiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsqL1xuLyp9Ki9cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIHdpZHRoOjEwMCU7XG5cbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/user/user-review/user-review.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/user/user-review/user-review.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>All {{otherUser.username}}'s Reviews</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let review of reviews\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"getImageUrlForAMovie(review.poster_path)\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h3>{{review.title}}</h3>\n            <p>{{review.description}}</p>\n          </div>\n          <div class=\"card-footer\">\n            <p>The Rate: <span class=\"badge badge-secondary\">{{review.rate}}</span></p>\n            <p><span class=\"badge badge-secondary\" routerLink=\"/movie/{{review.db_id}}\">To Movie</span></p>\n            <button *ngIf=\"!owner() && like(review.likeStatus)\" (click)=\"likeReview(review)\" class=\" far fa-thumbs-up icon-item\"></button>\n            <button *ngIf=\"!owner() && !like(review.likeStatus)\" (click)=\"unlikeReview(review)\" class=\" far fa-thumbs-down icon-item\"></button>\n            <h5>\n              <button *ngIf=\"owner() || admin()\" (click) = \"deleteReview(review._id)\" class=\"btn btn-block btn-primary\">\n                Delete\n              </button>\n            </h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/views/user/user-review/user-review.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/user/user-review/user-review.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReviewComponent", function() { return UserReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/review.client.service */ "./src/app/service/review.client.service.ts");






var UserReviewComponent = /** @class */ (function () {
    function UserReviewComponent(userService, router, sharedService, route, reviewService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.route = route;
        this.reviewService = reviewService;
        this.reviewerLink = '';
        this.route.queryParamMap.subscribe(function (params) {
            if (params.get('refresh')) {
                _this.ngOnInit();
            }
        });
    }
    UserReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.currUser = user;
                _this.reviewsLiked = user.likedReview;
                _this.userService.findUserByUserName(params['username']).subscribe(function (user) {
                    _this.otherUser = user;
                    _this.reviews = user.reviews;
                    for (var i = 0; i < _this.reviews.length; i++) {
                        for (var j = 0; j < _this.reviewsLiked.length; j++) {
                            if (_this.reviewsLiked[j] === _this.reviews[i]._id) {
                                _this.reviews[i].likeStatus = 'Unlike';
                            }
                        }
                    }
                });
            });
        });
    };
    UserReviewComponent.prototype.getImageUrlForAMovie = function (url) {
        if (url) {
            return 'https://image.tmdb.org/t/p/original' + url;
        }
    };
    UserReviewComponent.prototype.deleteReview = function (reviewId) {
        var _this = this;
        this.reviewService.deleteReview(reviewId).subscribe(function (data) {
            _this.userService.deleteReview(_this.currUser._id, reviewId).subscribe(function (res) {
                _this.router.navigate(['/user/' + _this.otherUser.username + '/review-list'], { queryParams: { refresh: new Date().getTime() }
                });
            });
        });
    };
    UserReviewComponent.prototype.likeReview = function (review) {
        var _this = this;
        this.reviewService.incrementReviewLikes(review).subscribe(function (data) {
            _this.userService.likeReview(_this.currUser._id, review._id).subscribe(function (res) {
                _this.router.navigate(['/user/' + _this.otherUser.username + '/review-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
            });
        });
    };
    UserReviewComponent.prototype.unlikeReview = function (review) {
        var _this = this;
        this.reviewService.decrementReviewLikes(review).subscribe(function (data) {
            _this.userService.unlikeReview(_this.currUser._id, review._id).subscribe(function (res) {
                _this.router.navigate(['/user/' + _this.otherUser.username + '/review-list'], {
                    queryParams: { refresh: new Date().getTime() }
                });
            });
        });
    };
    UserReviewComponent.prototype.owner = function () {
        if (this.currUser.username === this.otherUser.username) {
            return true;
        }
        else {
            return false;
        }
    };
    UserReviewComponent.prototype.like = function (status) {
        if (status === 'Like') {
            return true;
        }
        else {
            return false;
        }
    };
    UserReviewComponent.prototype.admin = function () {
        if (this.currUser.type === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    };
    UserReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-review',
            template: __webpack_require__(/*! ./user-review.component.html */ "./src/app/views/user/user-review/user-review.component.html"),
            styles: [__webpack_require__(/*! ./user-review.component.css */ "./src/app/views/user/user-review/user-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"]])
    ], UserReviewComponent);
    return UserReviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:4200'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hzy/MyWork/CS5610-final/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map