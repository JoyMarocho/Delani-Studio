$(document).ready(function () {
    $("#development-image").click(function () {
        $("#development-image").slideDown("1500").hide("1000");
        $("#development").show("1500");
    });

    $("#development").click(function () {
        $("#development").slideUp("1500");
        $("#development-image").slideDown("1500");
    });
});

$(document).ready(function () {
    $("#design-image").click(function () {
        $("#design-image").slideDown("1500").hide("1000");
        $("#design").show("1500");
    });

$("#design").click(function () {
    $("#design").slideUp("1500");
    $("#design-image").slideDown("1500");
});
});

$(document).ready(function () {
    $("#product-image").click(function () {
        $("#product-image").slideDown("1500").hide("1000");
        $("#product").show("1500");
    });

$("#product").click(function () {
    $("#product").slideUp("1500");
    $("#product-image").slideDown("1500");
});
});

$(document).ready(function () {
    $("#image1").mouseover(function () {
            $("#overlay").show();
        }).mouseout(function () {
            $("#overlay").hide();
        });
});
$(document).ready(function () {
    $("#image2").mouseover(function () {
            $("#overlay2").show();
        }).mouseout(function () {
            $("#overlay2").hide();
        });
});
$(document).ready(function () {
    $("#image3").mouseover(function () {
            $("#overlay3").show();
        }).mouseout(function () {
            $("#overlay3").hide();
        });
});
$(document).ready(function () {
    $("#image4").mouseover(function () {
            $("#overlay4").show();
        }).mouseout(function () {
            $("#overlay4").hide();
        });
});

$(document).ready(function () {
    $("#image5").mouseover(function () {
            $("#overlay5").show();
        }).mouseout(function () {
            $("#overlay5").hide();
        });
    $("#image6").mouseover(function () {
            $("#overlay6").show();
        }).mouseout(function () {
            $("#overlay6").hide();
        });
});
$("#image7").mouseover(function () {
        $("#overlay7").show();
    }).mouseout(function () {
        $("#overlay7").hide();
    });
$("#image8").mouseover(function () {
        $("#overlay8").show();
    }).mouseout(function () {
        $("#overlay8").hide();
    });

$(document).ready(function () {
    $("form#formFILL").submit(function (event) {
        //event.preventDefault();
        var name = $("input#ENTER1").val();
        var "email" = $("input#ENTER0").val();
        var "message" = $("textarea#COMMENT").val();
        if ($("input#ENTER1").val() &&  $("input#ENTER0").val()) {
            alert(name + ", message well received. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email");
        }
    });
});
