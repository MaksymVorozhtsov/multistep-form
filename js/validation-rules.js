$( "#form19" ).validate({
    rules: {
      singleLineText13: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10
      },
      singleLineText5: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10
      },
      singleLineText12: {
        required: true,
        number: true
      },
      singleLineText24: {
        required: true,
        number: true
      },
      singleLineText8: {
        required: true,
        number: true,
        minlength: 5,
        maxlength: 5
      },
      singleLineText21: {
        number: true,
        minlength: 5,
        maxlength: 5
      },
      "checkboxes": {
        require_from_group: [1, ".services-group"]
      }
    },
    groups: {
      'services-group': "checkboxes"
      },
    messages: {
      singleLineText13: {
        required: "Field is required",
        number: "Please fill this field just with numbers",
        minlength: "Tax number need to have 10 digits",
        maxlength: "Tax number need to have 10 digits"
      },
      singleLineText5: {
        required: "Field is required",
        number: "Please fill this field just with numbers",
        minlength: "Tax number need to have 10 digits",
        maxlength: "Tax number need to have 10 digits"
      },
      singleLineText12: {
        required: "Field is required",
        number: "Please fill this field just with numbers"
      },
      singleLineText24: {
        required: "Field is required",
        number: "Please fill this field just with numbers"
      },
      singleLineText8: {
        required: "Field is required",
        number: "Please fill this field just with numbers",
        minlength: "Zip code need to have 5 digits",
        maxlength: "Zip code need to have only 5 digits"
      },
      singleLineText21: {
        number: "Please fill this field just with numbers",
        minlength: "Zip code need to have 5 digits",
        maxlength: "Zip code need to have only 5 digits"
      },
      'services-group': {
        required: 'Please fill at least 1 of checkboxes'
    }
      },
      errorPlacement: function(error, element) {
        if(element.attr("name") == "checkboxes") {
            error.insertAfter("#subject_error");
        } else {
          error.insertAfter(element);
        }
    }
}); 