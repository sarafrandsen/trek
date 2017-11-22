$(document).ready(()=>{

  //// FN() FOR AJAX REQUEST/RESPONSE ///
  //// ALL TRIPS ////////////////////////
  let viewTripsList = function viewTripsList() {
    $.get('https://trektravel.herokuapp.com/trips',
    (response) => {
      response.forEach(function(trip) {
        let tripInfo =
        `<li data-id=${trip.id}>${trip.name}</li>`

        $('#trips ul').append(tripInfo);

        /// console.log(); ///
        console.log('all trips: success!');
      });
    })
    .fail(function(response){
      $('#fail').html('<p>Something went wrong!</p>')

      /// console.log(); ///
      console.log(response);
      console.log('all trips: error!');
    });
  };

  //// FN() FOR AJAX REQUEST/RESPONSE ///
  //// SPECIFIC TRIP ////////////////////
  let viewTrip = function viewTrip(id){
    $.get(`https://trektravel.herokuapp.com/trips/${id}`,
      (response) => {
        let tripInfo =
        `<h2>${response.name}</h2><ul><li>Continent: ${response.continent}</li><li>About: ${response.about}</li></ul>`;

        $('#trip-name').html(tripInfo);

        /// console.log(); ///
        console.log('single trip: success!');
      })
      .fail(function(response){
        $('#fail').html('<p>Something went wrong!</p>')

        /// console.log(); ///
        console.log(response);
        console.log('single trip: error!');
      });
    };

    /////////////////
    //// EVENTS /////
    /////////////////
    $('#all-trips-btn').on('click', function(){
      viewTripsList();
    });

    $('#trips ul').on('click', 'li', function(){
      let tripID = $(this).attr('data-id');
      viewTrip(tripID);
    });
  });
