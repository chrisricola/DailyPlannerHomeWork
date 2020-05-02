var currentTime = moment().format("HH")
console.log(currentTime);

$("#currentDay").text(moment().format("MMM Do YY"))

$(".saveBtn").click(function() {
    var textValue = $(this).siblings(".txtArea").val()
    var txtKey = $(this).siblings(".txtArea").attr("id")
    localStorage.setItem(txtKey,textValue)
})

// render local storage
$('.txtArea9').val(localStorage.getItem('9'))


//set the format of timeblocks to dynamically change its color based on time of the day
// compare id (9 for 9am) and if id < currenTime set class to .past


