angular.module('directivePractice')
    .directive('lessonHider', function() {
        return {
            templateUrl: './lessonHider.html',
            restrict: 'E',
            scope: {
                lesson: '=',
                dayAlert: '&'
            },
            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            },
            link: function(scope, element, attributes) {
                scope.unstrike = function() {
                    if (scope.checkBox1) {
                        element.css('text-decoration', 'line-through')
                    } else {
                        element.css('text-decoration', 'none')
                    }
                }
                scope.remove = function() {
                    element.css('display', 'none')
                }
                scope.getSchedule.then(function(response) {
                    scope.schedule = response.data
                    scope.schedule.forEach(function(scheduleDay) {
                        if (scheduleDay.lesson === scope.lesson) {
                            element.css('text-decoration', 'line-through')
                            scope.lessonDay = scheduleDay.weekday
                            return;
                        }
                    })
                })
            }

        }
    })
