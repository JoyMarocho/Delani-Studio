$(document).ready(function () {
    $("development-image").click(function () {
        $("#development-image").slideDown('1500').hide('1000');
        $("development").show('1500');
    });
});
$("#development").click(function () {
    $("#develpment").slideUp('1500');
    $("#development-image").slideDown('1500');
});

$(document).ready(function () {
    $("design-image").click(function () {
        $("#design-image").slideDown('1500').hide('1000');
        $("design").show('1500');
    });
});
$("#design").click(function () {
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
});

$(document).ready(function () {
    $("product-image").click(function () {
        $("#product-image").slideDown('1500').hide('1000');
        $("product").show('1500');
    });
});
$("#product").click(function () {
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
});

$(document).ready(function () {
    $("#work1").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay").hide();
    });
});
$(document).ready(function () {
    $("#work2").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
});
$(document).ready(function () {
    $("#work3").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
});
$(document).ready(function () {
    $("#work4").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay4").hide();
    });
});

$(document).ready(function () {
    $("#work5").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay5").hide();
    });
    $("#work6").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay6").hide();
    });
});
$("#work7").mouseover(function () {
    $("#overlay").show();
}).mouseout(function () {
    $("#overlay7").hide();
});
$("#work8").mouseover(function () {
    $("#overlay").show();
}).mouseout(function () {
    $("#overlay8").hide();
});

$(document).ready(function () {
    $("form#form34A").submit(function (event) {
        event.preventDefault();
        var name = $("input#ENTER1").val();
        var email = $("input#ENTER0").val();
        var message = $("textarea#COMMENT").val();
        if ($("input#ENTER1").val() && $("input#ENTER0").val()) {
            alert(name + ", message well received. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email");
        }

    });
});