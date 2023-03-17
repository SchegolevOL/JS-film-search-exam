  $("#btnToday").click(()=>{
    console.log('today')
    $("#btnToday").addClass('btn-today');
    $("#btnWeek").addClass('btn-week');
    $("#btnToday").removeClass('btn-today-rev');
    $("#btnWeek").removeClass('btn-week-rev');
    $('#contentToday').removeClass('none');
    $('#contentWeek').addClass('none');

})

$("#btnWeek").click(()=>{
    $("#btnToday").addClass('btn-today-rev');
    $("#btnWeek").addClass('btn-week-rev');
    $("#btnToday").removeClass('btn-today');
    $("#btnWeek").removeClass('btn-week');
    $('#contentWeek').removeClass('none');
    $('#contentToday').addClass('none');
})

