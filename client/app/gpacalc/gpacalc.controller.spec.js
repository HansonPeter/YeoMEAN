'use strict';


 /*
 Jacob Opdahl, Peter Hanson, Emma Sax
 Lab 5
 */

describe('Controller: GpacalcCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var GpacalcCtrl, scope, httpBackend, classes;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;
      GpacalcCtrl = $controller('GpacalcCtrl', {
          $scope: scope
      });

      classes = [];

      //The following httpBackend things will determine what will happen when an http request is called during our tests
      httpBackend.when('POST', '/api/courses').respond(function(method, url, data, headers) {
          classes.push(JSON.parse(data));
          return [200, {}, {}];
      });

      httpBackend.when('GET', '/api/courses').respond(classes);

      //The 1 is for identifying the _id on the movie in the "database"
      httpBackend.when('DELETE', '/api/courses/1').respond(function() {
          classes.splice(classes.indexOf({name:"IS 2001H", grade: "A", gradePoints: 4, credits: 2}),1);
          return [200, {}, {}];
      });
  }));

  it('should ...', function () {
      expect(1).toEqual(1);
  });

    //We're not exactly sure how to run the tests....
    describe('testing add and delete from the database', function() {
        it('should add a new course "IS 2001H" with a grade of "A", gradePoints of 4, and credits of 2 and return it', function() {
            scope.courseName = "IS 2001H";
            scope.gradeValue = "A";
            scope.creditValue = 2;
            scope.addClass();
            //all of the http requests are added into a queue and are all run when the flush() method is called
            httpBackend.flush();
            expect(classes[0]).toEqual({name:"IS 2001H", grade: "A", gradePoints: 4, credits: 2});
        });

        it('should return empty object', function() {
            scope.courseName = "IS 2001H";
            scope.gradeValue = "A";
            scope.creditValue = 2;
            scope.addClass();
            //The _id is used so the correct course is deleted from the database
            scope.removeClass({name:"IS 2001H", grade: "A", gradePoints: 4, credits: 2, _id:1});
            httpBackend.flush();
            expect(classes.length).toEqual(0);
            expect(classes[0]).toEqual(undefined);
        });

    });
})