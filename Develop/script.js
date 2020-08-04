$(document).ready(function() {
    // Display current date.
    $("#currentDay").text(moment().format("dddd MMMM Do"));

    // Assign saveBtn click listener for user input. 
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).siblings("textarea").attr("id");

        // Set items in localStorage.
        localStorage.setItem(time, text);
    })
    
    // Load saved data from localStorage for individual hour on schedule.
    $("#hour-9").val(localStorage.getItem("hour-9"));
    $("#hour-10").val(localStorage.getItem("hour-10"));
    $("#hour-11").val(localStorage.getItem("hour-11"));
    $("#hour-12").val(localStorage.getItem("hour-12"));
    $("#hour-13").val(localStorage.getItem("hour-13"));
    $("#hour-14").val(localStorage.getItem("hour-14"));
    $("#hour-15").val(localStorage.getItem("hour-15"));
    $("#hour-16").val(localStorage.getItem("hour-16"));
    $("#hour-17").val(localStorage.getItem("hour-17"));

    // Track each hour to compare to current time of day.
    function hourTracker() {
        // Target present hour.
        var presentHour = moment().hours();

        // Loop through time blocks.
        $(".description").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(blockHour, presentHour)
            
            // Past, present, future classes added to blockHour based off time of day from moment.js.
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