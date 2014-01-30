var req = function(_repoRequest) {

  $.getJSON(_repoRequest, function(json) {
    var repositories = json;
    // console.log(repositories);

    if (repositories.length == 0) {
      var errorMsg = 'No repos!';
      console.log(errorMsg);
    } else {

      $.each(repositories, function(index) {

          var output = repositories[index];
          // console.log(output);
        if (output.homepage !== null) {

          $('#target').append('<div>' + output.homepage + '</div>');
          }

      });
    }
  });
};


jQuery(document).ready(function($) {
      console.log('ready');

  req('https://api.github.com/users/fabiantheblind/repos');


});

// https: //api.github.com/users/fabiantheblind/repos
