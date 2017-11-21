$(document).ready(()=>{

  // FUNCTION FOR AJAX REQUEST AND RESPONSE FOR ALL TRIPS
  let loadTrips = function loadTrips() {
    $.get('https://trektravel.herokuapp.com/trips',
    (response) => {

      response.forEach(function(trip) {
        let tripInfo =
        `<li><h3 data-id=${trip.id}> ${trip.name} </a></h3><p> ${trip.continent}, ${trip.weeks} weeks</li>`

        $('#trips ul').append(tripInfo);
        console.log('success!-for all trips');
      });

    })
    .fail(function(response){
      console.log(response);
      $('#fail').html('<p>Request was unsuccessful-for all trips</p>')
    })
    .always(function(){
      console.log('always-for all trips');
    });
  };

  // FUNCTION FOR AJAX REQUEST AND RESPONSE FOR A SPECIFIC TRIP
  let loadTrip = function loadTrip(id){
    $.get(`https://trektravel.herokuapp.com/trips/${id}`,
      (response) => {
        let tripInfo =
        `<h2>${response.name}</h2>`;

        $('#trip').html(tripInfo);
        console.log('success!-for single trip ID');
      })
      .fail(function(response){
        console.log(response);
        $('#fail').html('<p>Request was unsuccessful-for single trip ID.</p>')
      })
      .always(function(){
        console.log('always even if we have success or failure-for single trip ID');
      });
    };


    // EVENTS
    $('#trips ul').on('click', 'h3', function(){
      let tripID = $(this).attr('data-id');
      loadTrip(tripID);
    });

    $('#load-all-trips').on('click', function(){
      loadTrips();
    });

  });
