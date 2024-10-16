const projectK = () => {
    // Create a new div element
    var popup = document.createElement("div");

    // Set styles for the popup
    popup.style.height = "30px";
    popup.style.width = "200px"; // Adjusted width for better visibility
    popup.style.backgroundColor = "black"; // Background color
    popup.style.color = "white"; // Text color
    popup.style.position = "fixed"; // Make it fixed on the screen
    popup.style.top = "10px"; // Position from the top
    popup.style.right = "10px"; // Position from the right
    popup.innerHTML = "Someone just signed up!"; // Popup message

    // Append the popup to the body
    document.body.appendChild(popup);

    // Set a timeout to hide the popup
    setTimeout(() => {
        popup.style.display = "none"; // Hide the popup after 5 seconds
    }, 5000);
};

// Call the projectK function to show the popup when the script loads
window.onload = projectK;
