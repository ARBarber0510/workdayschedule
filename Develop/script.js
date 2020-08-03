$(document).ready(function() {

$("#currentDay").text(moment().format("dddd MMMM Do"));


$(".time-block").each(function() {
    console.log($(this).children())
})

// SaveBtn listener for user input assigned.
$(".saveBtn").on("click", function() {
    console.log(this);

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

$("#hour-9" .description).val(localStorage.getItem("hour-9"));
$("#hour-10" .description).val(localStorage.getItem("hour-10"));
$("#hour-11" .description).val(localStorage.getItem("hour-11"));
$("#hour-12" .description).val(localStorage.getItem("hour-12"));
$("#hour-13" .description).val(localStorage.getItem("hour-13"));
$("#hour-14" .description).val(localStorage.getItem("hour-14"));
$("#hour-15" .description).val(localStorage.getItem("hour-15"));
$("#hour-16" .description).val(localStorage.getItem("hour-16"));
$("#hour-17" .description).val(localStorage.getItem("hour-17"));


function hourTracker() {
    var presentHour = moment().hour();

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