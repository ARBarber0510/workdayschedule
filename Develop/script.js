$("#currentDay").text(moment().format("dddd MMMM Do"));


$(".time-block").each(function() {
    console.log($(this).children())
})

// Need to color code time blocks based off time of day based off assigned classes.
// Present hour is highlighted in red.
// Future hours are highlighted in green.
// Past hours are gray. 
// Want to add the days schedule to the respective time slots and save it.
// If the user refreshes or exits out of the page and returns later, the daily items are saved. 