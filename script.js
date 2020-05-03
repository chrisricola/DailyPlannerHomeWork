var currentTime = moment().format("HH")
console.log(currentTime);

$("#currentDay").text(moment().format("MMM Do YY"));

$(".saveBtn").click(function() {
    var txtValue = $(this).siblings(".txtArea#").val();
    var txtKey = $(this).siblings(".txtArea#").attr("id")
    console.log(txtKey);
    localStorage.setItem(txtKey,txtValue)
})

// render local storage
$('.txtArea9').val(localStorage.getItem('9'))
$('.txtArea10').val(localStorage.getItem('10'))
$('.txtArea11').val(localStorage.getItem('11'))
// $('.txtArea12').val(localStorage.getItem('12'));
// $('.txtArea13').val(localStorage.getItem('13'))
// $('.txtArea14').val(localStorage.getItem('14'))
// $('.txtArea15').val(localStorage.getItem('15'))
// $('.txtArea16').val(localStorage.getItem('16'))
// $('.txtArea17').val(localStorage.getItem('17'))



//set the format of timeblocks to dynamically change its color based on time of the day
// compare id (9 for 9am) and if id < currenTime set class to .past
