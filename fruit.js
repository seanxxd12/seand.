function getFruitMessage() {
    var fruit = document.getElementById("fruit").value;
    var message;

    switch (fruit) {
        case "Apple":
            message = "You've chosen an apple. It's a popular fruit";
            break;
        case "Banana":
            message = "You've chosen a banana. It's rich in potassium";
            break;
        case "Orange":
            message = "You've chosen an orange. It's known for its vitamin C content";
            break;
        case "Pineapple":
            message = "You've chosen a pineapple. It's rich in fiber";
            break;
        default:
            message = "Sorry, we don't have information about that fruit";
    }

    document.getElementById("message").innerText = message;
}
function goBack() {
    window.history.back(); // This will navigate to the previous page in history
}
const nextButton = document.getElementById('nextButton');
const nextWebsiteUrl = 'https://example.com';

nextButton.addEventListener('click', function() {
    window.location.href = "calcu.html";
});