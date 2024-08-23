// Set the date we're counting down to
const countdownDate = new Date("2024-11-20T23:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = countdownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements with the corresponding IDs
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// FAQ Section
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        
        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});
