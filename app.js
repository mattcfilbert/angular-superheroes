/* global angular */
(function () {
  angular.module('superApp', [])
.controller('SupersController', ['supers', SupersController])
.factory('supers', [supersService])

  function supersService () {
    const supers = [
      { name: 'Flavorman', phone_number: '(555) 822-1988', comics_affiliation: 'DC', img_url: 'https://pbs.twimg.com/media/B4wEQGjCcAAmrQJ.jpg'},
      { name: 'Perryman', phone_number: '(555) 222-1524', comics_affiliation: 'Marvel', img_url: 'https://cdn.playbuzz.com/cdn/UserImages/60112eac-270e-41ab-aa37-c7beb866de9b.jpg'},
      { name: 'Grouchman', phone_number: 'REDACTED', comics_affiliation: 'DC', img_url: 'https://vignette1.wikia.nocookie.net/muppet/images/5/5f/OscarsClassicStare.jpg/revision/latest?cb=20120222062511'},
      { name: 'Other Grouchman', phone_number: 'REDACTED', comics_affiliation: 'Marvel', img_url: 'https://vignette1.wikia.nocookie.net/muppet/images/5/5b/Oscar-can.png/revision/latest?cb=20120117061845'}
    ]

    return {
      all: all
    }

    function all () {
      return supers
    }

  }

  function SupersController (supers) {
    this.supers = supers.all()
  }
})()
