// test to ensure jQuery is working
console.log('main.js is started');

var a = {};

$.getJSON('data.json', function(data) {
    a = data;
    console.log(a);
    $.each(a, function(idx, elem) {
        console.log(idx);
        console.log(elem);
        $('table#tbl tbody').append('<tr><td>' + elem.ID + '</td><td>' + elem.Name + '</td><td>' + elem.IDNumber + '</td></tr>');
    });
});
