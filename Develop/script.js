$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd MMMM Do"));

    // Storing
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).siblings("textarea").attr("id");

        localStorage.setItem(time, text);
    })
    
    $("#hour-9").val(localStorage.getItem("hour-9"));
    $("#hour-10").val(localStorage.getItem("hour-10"));
    $("#hour-11").val(localStorage.getItem("hour-11"));
    $("#hour-12").val(localStorage.getItem("hour-12"));
    $("#hour-13").val(localStorage.getItem("hour-13"));
    $("#hour-14").val(localStorage.getItem("hour-14"));
    $("#hour-15").val(localStorage.getItem("hour-15"));
    $("#hour-16").val(localStorage.getItem("hour-16"));
    $("#hour-17").val(localStorage.getItem("hour-17"));

    // Trying to target each hour ID and addClass past, present, future based on time of day.
    function hourTracker() {
        // Console log returning presentHour not defined in console.
        var presentHour = moment().hours();

        $(".description").each(function() {
            // console.log($(this).children())
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
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