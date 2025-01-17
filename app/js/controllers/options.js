(function() {
    'use strict';

    angular
        .module('ffxivCraftOptWeb.controllers')
        .controller('OptionsController', controller);

    function controller($scope, $modalInstance, pageState, sequenceSettings, macroOptions) {
        $scope.onMonteCarloModeChange = onMonteCarloModeChange;
        $scope.save = save;
        $scope.cancel = cancel;

        $scope.pageState = pageState;
        $scope.sequenceSettings = angular.copy(sequenceSettings);
        $scope.macroOptions = angular.copy(macroOptions);

        //////////////////////////////////////////////////////////////////////////

        function onMonteCarloModeChange() {
            if ($scope.sequenceSettings.monteCarloMode === 'macro') {
                $scope.sequenceSettings.useConditions = true;
                $scope.sequenceSettings.conditionalActionHandling = 'skipUnusable'
            }
        }

        function save() {
            $modalInstance.close({
                sequenceSettings: $scope.sequenceSettings,
                macroOptions: $scope.macroOptions
            });
        }

        function cancel() {
            $modalInstance.dismiss('cancel');
        }
    }
})();