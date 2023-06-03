function redirectPage() {

  // Get a reference to the select element
  var selectElement = document.getElementById("selectActivity");

  // Get the selected option
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  // Redirect the user to the appropriate page based on the selected option
  if (selectedOption === "activity") {
    window.location.href = "activity.html";
  } else if (selectedOption === "course") {
    window.location.href = "course.html";
  } else if (selectedOption === "event") {
    window.location.href = "event.html";
  }
}