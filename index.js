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
        let tripName =
        `Trip ${response.id}: ${response.name}`;
        let tripSummary = `<li><strong>Continent:</strong> ${response.continent}</li>
        <li><strong>About:</strong> ${response.about}</li>
        <li><strong>Trip Duration (in weeks):</strong> ${response.weeks}</li>
        <li><strong>Trip Cost:</strong> $${response.cost}</li>
        <li><small>Category: ${response.category}</small></li>`;
        let showReserveBtn = `<button class="button secondary hollow">Reserve Trip</button>`;

        $('#trip-name').html(tripName);
        $('#trip-summary').html(tripSummary);
        $('#show-reserve-btn').html(showReserveBtn);

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





//// FN() FOR AJAX POST /////////
//// NEW RESERVATION ////////////
    let viewForm = function viewForm(id) {

    };






    /////////////////
    //// EVENTS /////
    /////////////////

    // view all trips //
    $('#all-trips-btn').on('click', function(){
      viewTripsList();
    });

    // view trip summary //
    $('#trips ul').on('click', 'li', function(){
      let tripID = $(this).attr('data-id');
      viewTrip(tripID);
    });




    // make a reservation //
    $('#submit-reservation').on('submit', function(e) {
      e.preventDefault();

      const url = $(this).attr('action');
      console.log(url);
      const formData = $(this).serialize();
      console.log(formData);

      $.post(url, formData, (response) => {
      $('#confirmation-msg').html('<p>Made Reservation!</p>');
      });
    });




  });
