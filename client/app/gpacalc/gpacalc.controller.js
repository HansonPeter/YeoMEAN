'use strict';

/*
 Jacob Opdahl, Peter Hanson, Emma Sax
 Lab 5
 */

angular.module('yeoMeanApp')
  .controller('GpacalcCtrl', function ($scope, $http) {
    $scope.message = 'Hello';

        /*
        // Keeps track of the states of the grade buttons independently
        // using data-binding from angular.
        $scope.gradeStatuses = {
            isopen1: false,
            isopen2: false,
            isopen3: false,
            isopen4: false
        };

        // Keeps track of the states of the credit buttons independently
        // using data-binding from angular.
        $scope.creditStatuses = {
            isopen1: false,
            isopen2: false,
            isopen3: false,
            isopen4: false
        };
        */

        // Each class corresponds to a row in the table for our calculator
        // and is updated using data-binding.
        // Note, we could've added buttons to allow users to add or remove buttons,
        // but we instead spent our time trying to help KK find a way to test Angular.
        // Plus, they can technically choose less than four courses by choosing 0 credits.
        // Also, four tends to be the average.
        $scope.classes = [
            /*{letter: "", gradePoints: 0, credits: 0},
            {letter: "", gradePoints: 0, credits: 0},
            {letter: "", gradePoints: 0, credits: 0},
            {letter: "", gradePoints: 0, credits: 0}*/
        ];

        $http.get('/api/course').success(function(classes) {
            $scope.classes = classes;
        });

        // These are the possible grades we consider and their gradepoints.
        $scope.grades = [
            {letter: 'A', gradePoints: 4},
            {letter: 'A-', gradePoints: 3.67},
            {letter: 'B+', gradePoints: 3.33},
            {letter: 'B', gradePoints: 3},
            {letter: 'B-', gradePoints: 2.67},
            {letter: 'C+', gradePoints: 2.33},
            {letter: 'C', gradePoints: 2},
            {letter: 'C-', gradePoints: 1.67},
            {letter: 'D+', gradePoints: 1.33},
            {letter: 'D', gradePoints: 1},
            {letter: 'F', gradePoints: 0}
        ];

        // Possible credits a course could have.
        // Selecting 0 is equivalent to taking one less class for calculation.
        $scope.credits = [
            0,
            1,
            2,
            3,
            4,
            5
        ];

        // Set the grade in classes[] when a grade is selected
        // from a dropdown.
        $scope.selectGrade = function(course, grade) {
            course.letter = grade.letter;
            course.gradePoints = grade.gradePoints;
        };

        // Same as previous but with credits.
        $scope.selectCredit = function(course, credit) {
            course.credits = credit;
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

        // Adds another class to be used to calculate the GPA.
        $scope.addClass = function() {
            if ($scope.courseName == "") {
                return;
            }
            $http.post('/api/courses', {name: $scope.courseName, grade: "", gradePoints: 0, credits: 0}).success(function(){
                //Update classes to have same data that's in the database on the server
                $http.get('/api/courses').success(function(classes) {
                    $scope.classes = classes;
                });
                $scope.courseName = '';
            });
            //var course = {name: $scope.courseName, letter: "", gradePoints: 0, credits: 0};
            //$scope.classes.push(course);
        };

        // Removes a class being used to calculate the GPA.
        // Removes from the given index as it is bound to the position of the
        // course in classes.
        $scope.removeClass = function(course) {
            $http.delete('/api/courses/' + course._id).success(function(){
                //Update classes to have the same data that's in the database on the server
                $http.get('/api/courses').success(function(classes) {
                    $scope.classes = classes;
                });
            });
            //$scope.classes.splice(index, 1);
        };

        // Came from the code we copied above.
        $scope.toggled = function(open) {
            console.log('Dropdown is now: ', open);
        };

        // Came from the code we copied above.
        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

  });