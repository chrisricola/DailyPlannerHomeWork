var currentTime = moment().format("HH")
console.log(currentTime);
// this is the current time of day, which pops up on the jumbotron.  
// below is the formula that when the hour passes, it changes the row color.  
$("#currentDay").text(moment().format("MMM Do YY"));

for (var i = 9; i < 18; i++) {
    if (i < moment().hour()) {
        $("#" + i).addClass("past")
    }
    else if (i === moment().hour()){
        $("#" + i).addClass("present")
    }
    else {
        $("#" + i).addClass("future")
    }
}
// saves to local storage
$(".saveBtn").click(function() {
    var txtValue = $(this).prev('.txtArea').val();
    var txtKey = $(this).prev('.txtArea').attr("id")
    localStorage.setItem(txtKey,txtValue)
    console.log(txtKey,txtValue);
});

// render local storage

$('#9').val(localStorage.getItem('9'));
$('#10').val(localStorage.getItem('10'));
$('#11').val(localStorage.getItem('11'));
$('#12').val(localStorage.getItem('12'));
$('#13').val(localStorage.getItem('13'));
$('#14').val(localStorage.getItem('14'));
$('#15').val(localStorage.getItem('15'));
$('#16').val(localStorage.getItem('16'));
$('#17').val(localStorage.getItem('17'));

