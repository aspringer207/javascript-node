
$("#nmform").ready(
    function(element) {
        $("#nmform").validate({
            rules:{
                "nName": {
                    required: true,
                    minlength: 2
                },
                "nEmail": {
                    required: true,
                    email: true
                },
                "nPhone": {
                    required: true,
                    phoneUS: true
                },
                "a1a": {
                    required: true,
                    minlength: 2
                },
                
                "city1": {
                    required: true,
                    minlength: 2
                },
                "zip1": {
                    required: true,
                    digits: true,
                    minlength: 5,
                    maxlength: 5
                },
                "a2a": {
                required: function(element) {
                    return $("address-multiple").is(":checked");
                }
                },
                
                "city2": {
                    required: function(element) {
                    return $("address-multiple").is(":checked");
                    }
                },
                "zip2": {
                    required: function(element) {
                    return $("address-multiple").is(":checked");
                    },
                    digits: true,
                    minlength: 5,
                    maxlength: 5
                },
                "nmembershiptype": {
                    required: true
                },
                "ridinginterests": {
                    required: true
                },
                "ridinginterestsother": {
                    required: function(element) {
                        return $("intoth").is(":checked");
                    }
                }
            },
            messages:{
                "nName": "Please enter your name.",
                "nEmail": "Please enter a valid email address.",
                "nPhone": "Please enter a valid phone number.",
                "a1a": "Please enter your home address.",
                "city1": "Please enter your city.",
                "zip1": "Please enter a valid zip code.",
                "a2a": "Please enter your mailing address.",
                "city2": "Please enter a city for your mailing address.",
                "zip2": "Please enter a valid zip code for your mailing address.",
                "nmembershiptype": "Please select a membership type.",
                "ridinginterests": "Please select at least one riding interest.",
                "ridinginterestsother": "If you selected 'Other', please specify."

            }
    });
    }

) 