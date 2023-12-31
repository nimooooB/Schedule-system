// Add an event listener to the "PRINT" button
var printButton = document.getElementById("printButton");
printButton.addEventListener("click", function() {
  printMainContent();
});
function printMainContent() {
    var mainContent = document.querySelector(".main").innerHTML; // Get the HTML content of the main section
    var printWindow = window.open("", "_blank"); // Open a new window
    
    // Write the main content to the new window
    printWindow.document.open();
    printWindow.document.write("<html><head><link rel='stylesheet' href='new.css' media='print'><title>Print</title></head><body>" + mainContent + "</body></html>");
    printWindow.document.close();
    
    // Trigger the print action
    printWindow.print();
  }
  
   function showSuccessMessage(message, color) {
    var notificationContainer = document.querySelector(".notification-container");
    
    var notification = document.createElement("div");
    notification.textContent = message;
    notification.className = "notification";
    notification.style.color = color;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(function() {
      notification.remove();
    }, 2500);
  }
