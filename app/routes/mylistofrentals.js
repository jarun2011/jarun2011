import Route from '@ember/routing/route';
import d3 from 'd3'
import moment from 'moment';

// var moment = require('moment');

export default class MylistofrentalsRoute extends Route {

  model(){

    var thisObj = this;

    var cars = ["BMW", "Audi", "Mercedes Benz", "Toyota Innova", "Hyundai i20", "Hyundai Verna"];
    var set = new Set();

      set.add(235);
      set.add('some text');
      set.add('foo');
      set.size;

    var listofintegers = [5, 12, 8, 130, 44];
    var found_elements = listofintegers.filter(element => element > 10);
    var sliced_elements = listofintegers.slice(2, 3);
    var spliced_elements = listofintegers.splice(1, 3);
    var lastIndexOf = listofintegers.lastIndexOf(130, 4);

    var listofathletes = 
    [      
      {name: "Floyd Mayweather", sport: "Boxing", nation: "United States", earnings: 285},
      {name: "Lionel Messi", sport: "Soccer", nation: "Argentina", earnings: 111},
      {name: "Cristiano Ronaldo", sport: "Soccer", nation: "Portugal", earnings: 108},
      {name: "Conor McGregor", sport: "MMA", nation: "Ireland", earnings: 99},
      {name: "Neymar", sport: "Soccer", nation: "Brazil", earnings: 90},
      {name: "LeBron James", sport: "Basketball", nation: "United States",  earnings: 85.5},
      {name: "Roger Federer", sport: "Tennis", nation: "Switzerland", earnings: 77.2},
      {name: "Stephen Curry", sport: "Basketball", nation: "United States", earnings: 76.9},
      {name: "Matt Ryan", sport: "Football", nation: "United States", earnings: 67.3},
      {name: "Matthew Stafford", sport: "Football", nation: "United States", earnings: 59.5}
    ]

    var groupedathletesBySport = d3.groups(listofathletes, d => d.sport)
    var athletesbynationandsport = d3.groups(listofathletes, d => d.nation, d => d.sport)
    var sum = d3.rollup(listofathletes, v => d3.sum(v, d => d.earnings), d => d.sport)
    var length = d3.rollup(listofathletes, v => v.length, d => d.nation, d => d.sport)
    debugger

    var listoftransactions = [
      {name: "Jim",   amount: 3400,  date: new Date("2015-11-12")},
      {name: "Carl",  amount: 12011, date: new Date("2015-11-12")},
      {name: "Carl",  amount: 2391,  date: new Date("2015-11-12")},
      {name: "Stacy", amount: 3405,  date: new Date("2015-10-09")},
      {name: "Stacy", amount: 1201,  date: new Date("2016-01-04")}
    ]

    listoftransactions.forEach( (eachtransactionitem) =>{
      var formattedDate = moment(eachtransactionitem.date).format('MMM Do YYYY')
      eachtransactionitem.date = formattedDate;
      debugger
    })

    var transactionsgroupedbydate = d3.group(listoftransactions, d => d.date)
    var transactionsgroupedbynamedate = d3.group(listoftransactions, d => d.name, d => d.date)

    var listOfArrayObjects =  Ember.Object.extend({
        sequences: Ember.computed(function() {    
        
          var sequence = [1, 2, 3, 56, 66, 78, 98, 898, 564]

          sequence.push(423);
          sequence.push(545);
          sequence.splice(2, 4)

          return sequence
        })
      , car: Ember.computed(function () {
        
          var myCar = new Object();
        
            myCar.make = 'Ford';
            myCar.model = 'Mustang';
            myCar.year = 1969;

            myCar['year'] = 2015;

            var propertyName = 'make';
            
            myCar[propertyName] = 'Audi';

            propertyName = 'model';
            myCar[propertyName] = 'Q7';

            return myCar
        })
      , cars: cars
      , set: set
      , for_in: Ember.computed(function () {
          
          var object = { a: 1, b: 2, c: 3 };

          return object

        })
      , obj_keys: Ember.computed(function () {
          
          var myObject = {
            a: 'somestring',
            b: 42,
            c: false
          };

          return myObject

        })
      , map_object:  Ember.computed(function () {
        
        let sayings = new Map();

        sayings.set('dog', 'woof');
        sayings.set('cat', 'meow');
        sayings.set('elephant', 'toot');
        sayings.set('fox', 'ouch');
        sayings.set('bird', 'krukru');

        return sayings  

      })
      , listofintegers:listofintegers
      , found_elements: found_elements
      , sliced_elements: sliced_elements
      , spliced_elements: spliced_elements
      , lastIndexOf: lastIndexOf
      , listofathletes: listofathletes
      , groupedathletesBySport: groupedathletesBySport
      , athletesbynationandsport: athletesbynationandsport
      , transactionsgroupedbydate: transactionsgroupedbydate
      , transactionsgroupedbynamedate: transactionsgroupedbynamedate
    }).create();

    return listOfArrayObjects

  }
}