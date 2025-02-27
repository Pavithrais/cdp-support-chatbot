const chatbotResponses = {
    "how to integrate zeotap?": "To integrate Zeotap, you need to use the Zeotap API. Refer to the official documentation for step-by-step guidance.",
    "how to use segment with zeotap?": "To use Segment with Zeotap, set up a destination in Segment and configure it with Zeotap's API keys.",
    "how to track events in mParticle?": "In mParticle, use the 'logEvent' function to track user interactions.",
    "how to enable data enrichment in Lytics?": "To enable data enrichment in Lytics, go to the 'Enrichment' tab and select the data providers."
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // Add user message to chatbox
    chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;

    // Get bot response or default message
    const botResponse = chatbotResponses[userInput] || "I'm not sure about that. Try asking a different question!";
    
    // Display bot response
    setTimeout(() => {
        chatBox.innerHTML += `<div class="bot-message">${botResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Clear input field
    document.getElementById("user-input").value = "";
}
