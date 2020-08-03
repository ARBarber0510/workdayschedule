$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd MMMM Do"));

    
    $(".time-block").each(function() {
        console.log($(this).children())
    });


    // var $text9AM = $("#hour-9");
    // var $text10AM = $("#hour-10");
    // var $text11AM = $("#hour-11");
    // var $text12PM = $("#hour-12");
    // var $text1PM = $("#hour-13");
    // var $text2PM = $("#hour-14");
    // var $text3PM = $("#hour-15");
    // var $text4PM = $("#hour-16");
    // var $text5PM = $("#hour-17");

    // // SaveBtn listener for user input assigned.
    // $(".saveBtn").on("click", function() {
    //     console.log(this);

    //     localStorage.setItem("9AM", ($text9AM.val()))
    //     localStorage.setItem("10AM", ($text10AM.val()))
    //     localStorage.setItem("11AM", ($text11AM.val()))
    //     localStorage.setItem("12PM", ($text12PM.val()))
    //     localStorage.setItem("1PM", ($text1PM.val()))
    //     localStorage.setItem("2PM", ($text2PM.val()))
    //     localStorage.setItem("3PM", ($text3PM.val()))
    //     localStorage.setItem("4PM", ($text4PM.val()))
    //     localStorage.setItem("5PM", ($text5PM.val()))

    //     $("#text9AM").append(localStorage.getItem("9AM"));
    //     $("#text10AM").append(localStorage.getItem("10AM"));
    //     $("#text11AM").append(localStorage.getItem("11AM"));
    //     $("#text12PM").append(localStorage.getItem("12PM"));
    //     $("#text1PM").append(localStorage.getItem("1PM"));
    //     $("#text2PM").append(localStorage.getItem("2PM"));
    //     $("#text3PM").append(localStorage.getItem("3PM"));
    //     $("#text4PM").append(localStorage.getItem("4PM"));
    //     $("#text5PM").append(localStorage.getItem("5PM"));
    // })

    function hourTracker() {
        var presentHour = parseInt(moment().hour());

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, presentHour)

            if (blockHour < presentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === presentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour > presentHour) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    

    hourTracker();
})

// Need to color code time blocks based off time of day based off assigned classes.
// Present hour is highlighted in red.
// Future hours are highlighted in green.
// Past hours are gray. 
// Want to add the days schedule to the respective time slots and save it.
// If the user refreshes or exits out of the page and returns later, the daily items are saved. 