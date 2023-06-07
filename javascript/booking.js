handleBooking = () =>{
  // Get form input values
  let checkInDate = document.getElementById("check-in").value;
  let checkOutDate = document.getElementById("check-out").value;
  let roomType = document.getElementById("room-type").value;

  // Create a confirmation message with the submitted details
  let confirmationMessage = `Please confirm the following details:\n\n` +
    `Check-In Date: ${checkInDate}\n` +
    `Check-Out Date: ${checkOutDate}\n` +
    `Room Type: ${roomType}`;

  // Display the confirmation dialog box
  if (confirm(confirmationMessage)) {
    // User confirmed, proceed with the booking
    // Additional code for processing the booking form data
    console.log("Booking confirmed!");
  } else {
    // User cancelled, do not proceed with the booking
    console.log("Booking cancelled!");
  }


}