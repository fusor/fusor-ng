/**
 * Copyright 2014 Red Hat, Inc.
 *
 * This software is licensed to you under the GNU General Public
 * License as published by the Free Software Foundation; either version
 * 2 of the License (GPLv2) or (at your option) any later version.
 * There is NO WARRANTY for this software, express or implied,
 * including the implied warranties of MERCHANTABILITY,
 * NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 * have received a copy of GPLv2 along with this software; if not, see
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 */

/**
 * @ngdoc object
 * @name  FusorNg.fusor-ng.controller:HostgroupDetailsInfoController
 *
 * @requires $scope
 * @requires $q
 * @requires gettext
 * @requires Hostgroup
 *
 * @description
 *   Provides the functionality for the hostgroup details action pane.
 */
angular.module('FusorNg.fusor-ng').controller('HostgroupDetailsInfoController',
    ['$scope', '$q', 'gettext', 'Hostgroup',
    function ($scope, $q, gettext, Hostgroup) {

        $scope.successMessages = [];
        $scope.errorMessages = [];

        $scope.panel = $scope.panel || {loading: false};

        $scope.hostgroup = $scope.hostgroup || Hostgroup.get({id: $scope.$stateParams.hostgroupId}, function () {
            $scope.panel.loading = false;
        });

        $scope.save = function (hostgroup) {
            var deferred = $q.defer();

            hostgroup.$update(function (response) {
                deferred.resolve(response);
                $scope.successMessages.push(gettext('Hostgroup Saved'));
            }, function (response) {
                deferred.reject(response);
                angular.forEach(response.data.errors, function (errorMessage) {
                    $scope.errorMessages.push(gettext("An error occurred saving the Hostgroup: ") + errorMessage);
                });
            });

            return deferred.promise;
        };
    }]
);
