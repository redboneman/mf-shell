const {withNativeFederation, share} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: share({
    "@angular/core": { requiredVersion: 'auto', shareKey: '@angular/core for angular 13', singleton: true, strictVersion: true },
    "@angular/common": { requiredVersion: 'auto', shareKey: '@angular/core for angular 13', singleton: true, strictVersion: true },
    "@angular/router": { requiredVersion: 'auto', shareKey: '@angular/core for angular 13', singleton: true, strictVersion: true },
    "@angular/common/http": { requiredVersion: 'auto', shareKey: '@angular/core for angular 13', singleton: true, strictVersion: true },
    "@angular/platform-browser": { requiredVersion: 'auto', shareKey: '@angular/core for angular 13', singleton: true, strictVersion: true },
    "rxjs": { requiredVersion: 'auto', shareKey: '@angular/core for angular 13', singleton: true, strictVersion: true },
    "tslib": { requiredVersion: 'auto', shareKey: '@angular/core for angular 13', singleton: true, strictVersion: true },
  })

});
