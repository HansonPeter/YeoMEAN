'use strict';

/*
 Jacob Opdahl, Peter Hanson, Emma Sax
 Lab 5
 */

angular.module('yeoMeanApp')
    .controller('GpacalcCtrl', function ($scope, $http) {

    // Each class corresponds to a row in the table for our calculator
    // and is updated using data-binding.
    // This fills up by getting courses from the database in various places.
    $scope.classes = [];

    // Updates calculator with courses from the database anytime the page loads.
    $http.get('/api/courses').success(function(classes) {
        $scope.classes = classes;
    });

    /*
     * Originally used to make drop-down buttons, kept later as reference
     * to know the number of possible credits desired.
     $scope.credits = [
     0,
     1,
     2,
     3,
     4,
     5
     ];
     */

     /*
     This is a function that is a switch to determine how many grade points to give for a grade. If any letter
     other than these are given, the default amount of grade points given is zero.
      */
     $scope.convertGradeToGPA = function(grade) {
            switch (grade) {
                case "A":
                    return 4;
                    break;
                case "A-":
                    return 3.7;
                    break;
                case "B+":
                    return 3.33;
                    break;
                case "B":
                    return 3;
                    break;
                case "B-":
                    return 2.7;
                    break;
                case "C+":
                    return 2.33;
                    break;
                case "C":
                    return 2;
                    break;
                case "C-":
                    return 1.7;
                    break;
                case "D+":
                    return 1.33;
                    break;
                case "D":
                    return 1;
                    break;
                case "F":
                    return 0;
                    break;
                default:
                    return 0;
            };
     };

     // Uses the information in the classes array which has been updated
     // using data binding to calculate the GPA and instantly display it
     // using even more data-binding.
     $scope.calculateGPA = function() {
            var GPA = 0;
            var totalCredits = 0;
            for (var i = 0; i < $scope.classes.length; ++i) {
                GPA += ($scope.classes[i].gradePoints * $scope.classes[i].credits);
                totalCredits += $scope.classes[i].credits;
            };

            if (totalCredits != 0) {
                return "Your estimated GPA: " + (GPA / totalCredits);
            } else {
                return "You need to select courses and credits!";
            }

     };

     // Adds another class to be used to the database, and then updates the array.
     $scope.addClass = function() {
            if ($scope.courseName == '' ||
                $scope.gradeValue == '' ||
                $scope.creditValue < 0 ||
                $scope.creditValue > 5) { //can't check if the credit spot is empty because it's a number input, not string
                return;
            }

            $http.post('/api/courses', {name: $scope.courseName,
                                        grade: $scope.gradeValue,
                                        gradePoints: $scope.convertGradeToGPA($scope.gradeValue),
                                        credits: $scope.creditValue}).success(function(){
                //Update class to have same data that's in the database on the server
                $http.get('/api/courses').success(function(classes) {
                    $scope.classes = classes;
                });

                $scope.courseName = '';
                $scope.gradeValue = '';
                $scope.creditValue = '';
            });
     };

     // Removes a class being used to calculate the GPA from the database.
     // Then updates the array based on the db.
     $scope.removeClass = function(course) {
         $http.delete('/api/courses/' + course._id).success(function(){
             //Update classes to have the same data that's in the database on the server
             $http.get('/api/courses').success(function(classes) {
                 $scope.classes = classes;
             });
         });
     };
  });