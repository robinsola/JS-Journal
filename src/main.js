import { Entry } from './journal.js'

$(document).ready(function() {
  $("#journal-entry").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var date = $("#date").val();
    var body = $("#body").val();
    newEntry = new Entry(title, date, body);
    console.log(newEntry);
  });
});
