$( "form" ).each( function() {
    $( this ).validate( options );
  } );
  jQuery("input[type=button]").click(function(){

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
           required: "#address-multiple:checked",
           minlength: 2
        },
        "a2b": {
            required: "#address-multiple:checked",
            minlength: 2
         },
         "city2": {
            required: "#address-multiple:checked",
            minlength: 2
         },
         "zip2": {
            required: "#address-multiple:checked",
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
            required: "#intoth:checked"
        } 
    }
});
    
}
    );