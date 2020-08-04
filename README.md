# 05 Work Day Scheduler

This site is a simple calendar application that allows the user to save their schedule for each hour of the day. 
This app is run in the browser and uses dynamically updated HTML & CSS through the use of jQuery. 
The calendar's date and time is powered by the [Moment.js] library. 

## Deployed Applcation

```
https://arbarber0510.github.io/workdayschedule/
```

## Work Day Page Breakdown

```
WHEN the user opens the planner
THEN the current day is displayed at the top of the calendar
WHEN the user scrolls down
THEN the user is presented with timeblocks for the 9AM-5PM work day
WHEN the user views the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN the user clicks into a timeblock
THEN they can enter an event
WHEN the user clicks the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN the page is refreshed
THEN the saved events persist
```

The following screenshots reflects the application functionality:

![day planner demo](./Assets/workday-schedule-screenshot-1.PNG)
![day planner demo](./Assets/workday-schedule-screenshot-2.PNG)



