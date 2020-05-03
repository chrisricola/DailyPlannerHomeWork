var currentTime = moment().format("HH")
console.log(currentTime);

$("#currentDay").text(moment().format("MMM Do YY"));

$(".saveBtn").click(function() {
    var txtValue = $(this).prev(".txtArea").val();
    var txtKey = $(this).prev(".txtArea").attr("id")
    localStorage.setItem(txtKey,txtValue)
    console.log(txtKey,txtValue);
});

// render local storage
$('.txtArea').val(localStorage.getItem('9'))
$('.txtArea').val(localStorage.getItem('10'))
// $('.txtArea').val(localStorage.getItem('11'))


//set the format of timeblocks to dynamically change its color based on time of the day
// compare id (9 for 9am) and if id < currenTime set class to .past
