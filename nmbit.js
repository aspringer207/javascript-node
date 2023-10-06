$("#nmform").validate({
    rules: {
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
        "rname": "tel",
        "a1a": {
            required: true,
            minlength: 2
        },
        
        "a1b": {
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
        "a2b": {
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
    } 
})