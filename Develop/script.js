$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd MMMM Do"));

    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    $("#hour-9").val(localStorage.getItem("9AM"));
    $("#hour-10").val(localStorage.getItem("10AM"));
    $("#hour-11").val(localStorage.getItem("11AM"));
    $("#hour-12").val(localStorage.getItem("12PM"));
    $("#hour-13").val(localStorage.getItem("1PM"));
    $("#hour-14").val(localStorage.getItem("2PM"));
    $("#hour-15").val(localStorage.getItem("3PM"));
    $("#hour-16").val(localStorage.getItem("4PM"));
    $("#hour-17").val(localStorage.getItem("5PM"));

    function hourTracker() {
        var presentHour = moment().hour('H');

        $(".time-block").each(function() {
            // console.log($(this).children())
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, presentHour)
    
            if (blockHour < presentHour) {
                $(this).addClass("past")
            }
            else if (blockHour === presentHour) {
                $(this).addClass("present")
            }
            else if (blockHour > presentHour) {
                $(this).addClass("future")
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