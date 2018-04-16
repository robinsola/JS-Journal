import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Entry } from './journal.js';

$(document).ready(function() {
  $("#journal-entry").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var date = $("#date").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, date, body);
    var wordCount = newEntry.countWords();
    var vowelCount = newEntry.countVowels();
    var consonantCount = newEntry.countConsonants();
    $("#title-output").text(newEntry.title);
    $("#date-output").text(newEntry.date);
    $("#body-output").text(newEntry.body);
    $("#words").text("Your input was " + wordCount + " " + "words in length.");
    $("#vowels").text(vowelCount);
    $("#consonants").text(consonantCount);
  });
});
