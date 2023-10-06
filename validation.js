const activetab = document.querySelector(".tab-content")
var tabs = document.querySelectorAll(".tab");
var tabcontent = document.querySelectorAll(".tab-content");
var activetabcontent = container.querySelectorAll(".active");
var current = $(this).activetabcontent;
var currentform = current.querySelector("form");
var currentsubmitbutton = current.querySelectorAll(".submit-button");
$.validator.setDefaults({
    submitHandler: function () {
        alert("Thank you for your submission!");
    }
})

addEventListener("click", currentsubmitbutton, function () {
    var thisID = currentsubmitbutton.attr("id");
    toString(thisID);
    if (thisID == "#rsubmit") {
        $("#rform").validate({
            rules: {
                "rname": {
                    required: true,
                    minlength: 2
                }, "remail": {
                    required: true,
                    email: true
                },
                "rphone": {
                    required: true,
                    phoneUS: true
                },
                "rpaymethod": {
                    required: true
                },
                "rexpectedpaydate": {
                    required: true
                }
            },

            messages: {
                "rname": "Please enter your name",
                "remail": "Please enter your email",
                "rphone": "Please enter a valid phone number",
                "rpaymethod": "Please select a payment method",
                "rexpectedpaydate": "Please select an expected pay date"
            },
            errorElement: "em",
            errorPlacement: function (error, element) {
                error.addClass("help-block");
                error.insertAfter(element);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents.addClass("alert-error").removeClass("alert-success");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents.removeClass("alert-error").addClass("alert-success");
            }
        }
        );
    }
    else if (thisId == "nsubmit") {
        $("#nform").validate({
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
                    required: function (element) {
                        return $("address-multiple").is(":checked");
                    }
                },

                "city2": {
                    required: function (element) {
                        return $("address-multiple").is(":checked");
                    }
                },
                "zip2": {
                    required: function (element) {
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
                    required: function (element) {
                        return $("intoth").is(":checked");
                    }
                }

            },
            messages: {
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
            },
            errorElement: "em",
            errorPlacement: function (error, element) {
                error.addClass("help-block");
                error.insertAfter(element);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents.addClass("alert-error").removeClass("alert-success");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents.removeClass("alert-error").addClass("alert-success");
            }


        }

        )
    }
    else {
        $console.log("error")
    }
});

