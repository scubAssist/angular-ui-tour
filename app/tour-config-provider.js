/* global angular: false */

(function (app) {
    'use strict';

    app.provider('TourConfig', [function () {

        var config = {
            placement: 'top',
            animation: true,
            popupDelay: 1,
            closePopupDelay: 0,
            trigger: 'uiTourShow',
            enable: true,
            appendToBody: false,
            tooltipClass: '',
            orphan: false,
            backdrop: false,

            onStart: null,
            onEnd: null,
            onPause: null,
            onResume: null,
            onNext: null,
            onPrev: null,
            onShow: null,
            onShown: null,
            onHide: null,
            onHidden: null
        };

        this.set = function (option, value) {
            config[option] = value;
        };

        this.$get = [function () {

            var service = {};

            service.get = function (option) {
                return config[option];
            };

            service.getAll = function () {
                return angular.copy(config);
            };

            return service;

        }];

    }]);

}(angular.module('bm.uiTour')));