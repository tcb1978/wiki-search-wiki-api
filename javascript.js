$(document).ready(function() {
  // clear list
  $('#list').empty().removeClass('well');
  //search button clicked
  function submit() {
      $("#searchButton").on('click', function() {
      //Clear out ul if any from previous search
      $('#list').html('');
      //store search
      var searchFor = $('#search').val();
      //create ajax call
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchFor + "&format=json",
        "method": "GET",
        "dataType": "jsonp",
        "error": function(error) {
          console.log('Error');
        },
        "headers": {
          "cache-control": "no-cache",
          "postman-token": "d760fb37-7d85-e700-e00c-235da99832a8"
        }
      }
      $.ajax(settings).done(function(response) {
        // store values for each component of response
        var header = response[1];
        var about = response[2];
        var link = response[3];
        // build a line item for each response suggestion
        for (var i = 0; i < header.length; i++) {
          $('#list').addClass('well').append(`
            <li>
            <a href="#" class="wiki-link" target="_blank">
            <h3 class="text-info">
            ${header[i]}
            </h3>
            </a>
            <p class="text-info p-info"></p>
            </li>
          `);
        }
        for (var i = 0; i < about.length; i++) {
          $('.p-info').prepend(about[i]);
        }
        for (var i = 0; i < link.length; i++) {
          $('.wiki-link').attr('href', link[i]);
        }
        $('#list').show();
        //clear search
        $('#search').val('');
      });
    })
  };
  submit(); 

  // enter keypress  
  $('form').keypress(function (event) {
    if(event.which == 13) {
      event.preventDefault();
      // submit();
      //Clear out ul if any from previous search
      $('#list').html('');
      //store search
      var searchFor = $('#search').val();
      //create ajax call
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchFor + "&format=json",
        "method": "GET",
        "dataType": "jsonp",
        "error": function(error) {
          console.log('Error');
        },
        "headers": {
          "cache-control": "no-cache",
          "postman-token": "d760fb37-7d85-e700-e00c-235da99832a8"
        }
      }
      $.ajax(settings).done(function(response) {
        // store values for each component of response
        var header = response[1];
        var about = response[2];
        var link = response[3];
        // build a line item for each response suggestion
        for (var i = 0; i < header.length; i++) {
          $('#list').addClass('well').append(`
            <li>
            <a href="#" class="wiki-link" target="_blank">
            <h3 class="text-info">
            ${header[i]}
            </h3>
            </a>
            <p class="text-info p-info"></p>
            </li>
          `);
        }
        for (var i = 0; i < about.length; i++) {
          $('.p-info').prepend(about[i]);
        }
        for (var i = 0; i < link.length; i++) {
          $('.wiki-link').attr('href', link[i]);
        }
        $('#list').show();
        //clear search
        $('#search').val('');
      });
    }
  });
});