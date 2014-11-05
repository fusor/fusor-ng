/**
 * Copyright 2013 Red Hat, Inc.
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
 * @name  FusorNg.fusor-ng.controller:HostgroupsController
 *
 * @requires $scope
 * @requires $location
 * @requires Nutupane
 * @requires Hostgroup
 * @requires CurrentOrganization
 *
 * @description
 *   Provides the functionality specific to Hostgroups for use with the Nutupane UI pattern.
 *   Defines the columns to display and the transform function for how to generate each row
 *   within the table.
 */
angular.module('FusorNg.fusor-ng').controller('HostgroupsController',
    ['$scope', '$location', 'Nutupane', 'Hostgroup', 'CurrentOrganization',
    function ($scope, $location, Nutupane, Hostgroup, CurrentOrganization) {

        var watch, params = {
            'search':           $location.search().search || "",
            'sort_by':          'name',
            'sort_order':       'ASC',
            'enabled' :         true,
            'paged':            true
        };

        var nutupane = new Nutupane(Hostgroup, params);
        $scope.hostgroupTable = nutupane.table;
        $scope.hostgroupTable.refresh = nutupane.refresh;
        $scope.removeRow = nutupane.removeRow;

        $scope.hostgroupTable.closeItem = function () {
            $scope.transitionTo('hostgroups.index');
        };

        $scope.table = $scope.hostgroupTable;

        $scope.formatNameList = function (nameList) {
            return _.map(nameList, function (obj) {
                return obj.name;
            });
        };
    }]
);
