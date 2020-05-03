var currentTime = moment().format("HH")
console.log(currentTime);

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

$(".saveBtn").click(function() {
    var txtValue = $(this).prev('.txtArea').val();
    var txtKey = $(this).prev('.txtArea').attr("id")
    localStorage.setItem(txtKey,txtValue)
    console.log(txtKey,txtValue);
});

// render local storage

$('.txtArea').val(localStorage.getItem('#'))



