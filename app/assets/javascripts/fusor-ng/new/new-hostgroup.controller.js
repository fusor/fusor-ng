/**
 * Copyright 2013-2014 Red Hat, Inc.
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
 * @name  FusorNg.fusor-ng.controller:NewHostgroupController
 *
 * @requires $scope
 * @requires $q
 * @requires FormUtils
 * @requires Hostgroup
 * @requires Organization
 * @requires CurrentOrganization
 * @requires ContentView
 *
 * @description
 *   Controls the creation of an empty Hostgroup object for use by sub-controllers.
 */
angular.module('FusorNg.fusor-ng').controller('NewHostgroupController',
    ['$scope', '$q', 'FormUtils', 'Hostgroup', 'Organization', 'CurrentOrganization', 'ContentView',
    function ($scope, $q, FormUtils, Hostgroup, Organization, CurrentOrganization, ContentView) {

        $scope.hostgroup = $scope.hostgroup || new Hostgroup();
        $scope.panel = {loading: false};
        $scope.organization = CurrentOrganization;

        $scope.$watch('hostgroup.name', function () {
            if ($scope.hostgroupForm.name) {
                $scope.hostgroupForm.name.$setValidity('server', true);
            }
        });

        $scope.save = function (hostgroup) {
            hostgroup.$save(success, error);
        };

        function success(response) {
            $scope.table.addRow(response);
            $scope.transitionTo('hostgroups.details.info', {hostgroupId: $scope.hostgroup.id});
        }

        function error(response) {
            $scope.working = false;
            angular.forEach(response.data.errors, function (errors, field) {
                $scope.hostgroupForm[field].$setValidity('server', false);
                $scope.hostgroupForm[field].$error.messages = errors;
            });
        }

    }]
);
