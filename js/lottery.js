
if (profile) {
  var firstName = document.getElementById("dlslot_name_first");
  var lastName = document.getElementById("dlslot_name_last");
  var ticketNum = document.getElementById("dlslot_ticket_qty");
  var email = document.getElementById("dlslot_email");
  var month = document.getElementById("dlslot_dob_month");
  var day = document.getElementById("dlslot_dob_day");
  var year = document.getElementById("dlslot_dob_year");
  var zip = document.getElementById("dlslot_zip");
  var country = document.getElementById("dlslot_country");
  var agree = document.getElementById("dlslot_agree");

  try {
    firstName.value = profile.firstname;
    lastName.value = profile.lastname;
    ticketNum.options.selectedIndex = profile.ticketnum;
    email.value = profile.email;
    month.value = profile.month;
    day.value = profile.day;
    year.value = profile.year;
    zip.value = profile.zip;
    country.options.selectedIndex = profile.country;
    agree.checked = true;
  } catch (e) {
    // console.log("Error ", e.toString());
  }


  var firstName = document.getElementById("firstname");
  var lastName = document.getElementById("lastname");
  var email = document.getElementById("email");
  var zip = document.getElementById("zipcode");
  var oneTicket = document.getElementById("one_ticket");
  var twoTickets = document.getElementById("two_tickets");
  var checkboxes = document.querySelectorAll("input[type=checkbox]");
  var phone = document.getElementById("phonenumber");
  var phoneCheckbox = document.getElementById("mobile_notification");
  var shows = [];
  checkboxes.forEach(function (checkbox) {
    if (checkbox.id.startsWith("performance")) {
      shows.push(checkbox);
    }
  });
  var age = document.getElementById("age");
  function calculateAge(birthday) { // birthday is a date
    return Date.now() - birthday.getTime() / (1000 * 60 * 60 * 24 * 365); // in years
  }

  try {
    firstName.value = profile.firstname;
    lastName.value = profile.lastname;
    if (profile.ticketnum == 2) {
      twoTickets.checked = true;
    } else {
      oneTicket.checked = true;
    }
    email.value = profile.email;
    zip.value = profile.zip;
    shows.forEach(function (show) {
      show.checked = true;
    });

    var birthday = new Date(profile.year, profile.month, profile.day);
    if (calculateAge(birthday) >= 18) {
      age.checked = true;
    }

    if (profile.phone != "") {
      phone.value = profile.phone;
      phoneCheckbox.checked = true;
    }
  } catch (e) {
    // console.log("Error ", e.toString());
  }
  // Scroll to bottom of the page
  window.scrollTo(0, document.body.scrollHeight);
} else {
  console.log("Profile not set")
}