const botName = "Kort";

// Services Options
const option1 = "Our Services"
const option1Response = "We offer comprehensive real estate and construction services. What would you like to know more about?"
const option1A = "Land & Surveying"
const option1AResponse = "Our land services include:\n• Professional land surveying\n• Property boundaries assessment\n• Topographic surveys\n• Land preparation and development\n• Soil testing and analysis"
const option1B = "Construction"
const option1BResponse = "Our construction services include:\n• Residential construction\n• Commercial development\n• Project management\n• Sustainable building practices\n• Renovation and remodeling"
const option1C = "Property Management"
const option1CResponse = "Our property management services include:\n• Title transfers and consolidation\n• Property buying and selling\n• Lease management\n• Property maintenance\n• Real estate consulting"
const option1D = "Real Estate Brokerage"
const option1DResponse = "Our brokerage services include:\n• Property listing and marketing\n• Buyer representation\n• Market analysis\n• Property valuation\n• Investment consulting"

// Contact Options
const option2 = "Contact & Locations"
const option2Response = "How can we assist you with contacting our offices?"
const option2A = "Dumaguete Office"
const option2AResponse = "RIZZ DEVELOPMENT REALTY\nDumaguete City, Negros Oriental\nPhone: 035-527-3287\nEmail: sorrera@email.com\nOffice Hours: Mon-Fri 9AM-5PM"
const option2B = "Siquijor Office"
const option2BResponse = "RIZZ DEVELOPMENT REALTY\nLala-o, San Juan, Siquijor\nPhone: 035-527-8732\nEmail: sorrera@email.com\nOffice Hours: Mon-Fri 9AM-5PM"
const option2C = "Schedule a Consultation"
const option2CResponse = "We'd be happy to schedule a consultation. Please choose your preferred office location and we'll arrange a meeting with our experts."
const option2D = "Request Property Viewing"
const option2DResponse = "To arrange a property viewing:\n1. Call our office directly\n2. Email us with your preferred schedule\n3. Visit our office during business hours\nPlease have ready: Property reference number (if any), preferred viewing time, and contact details."

// Company Information
const option3 = "About Us"
const option3Response = "What would you like to know about Sorrera Realty Development?"
const option3A = "Company Profile"
const option3AResponse = "Sorrera Realty Development is a sole proprietor company registered under DTI, combining expertise in real estate, brokerage, and construction. We serve the Visayas region with offices in Dumaguete City and Siquijor."
const option3B = "Our Mission"
const option3BResponse = "To Develop & Build in attunement with nature for sustainable living, creating communities that thrive in harmony with their environment."
const option3C = "Our Vision"
const option3CResponse = "Building trust with Quality service, we aim to be the leading real estate developer in the Visayas region, known for excellence and integrity."
const option3D = "Our Team"
const option3DResponse = "Our team consists of licensed professionals:\n• Real Estate Brokers\n• Civil Engineers\n• Architects\n• Property Managers\n• Construction Experts"

// Investment Options
const option4 = "Investment Opportunities"
const option4Response = "Interested in real estate investment? Here are some options we offer:"
const option4A = "Available Properties"
const option4AResponse = "We have various properties available:\n• Residential lots\n• Commercial spaces\n• Agricultural land\n• Beach front properties\n• Development projects"
const option4B = "Investment Plans"
const option4BResponse = "Our investment options include:\n• Pre-selling properties\n• Joint ventures\n• Property development\n• Real estate portfolios\nContact us for detailed investment packages."
const option4C = "Market Insights"
const option4CResponse = "Current market trends in our region:\n• Growing tourism sector\n• Increasing property values\n• Development opportunities\n• Strategic location advantages"
const option4D = "ROI Calculator"
const option4DResponse = "To calculate potential returns on investment, please contact our office for a detailed analysis of:\n• Property appreciation rates\n• Rental yield potential\n• Development costs\n• Market forecasts"

// Base navigation
const returnMain = "I have a different question"
const returnMainMessage = "How else can I help you today?"

const POPUP_DELAY = 8000;
let isPopupActive = false;

function toggleChatbot() {
    const box = document.getElementById("chatbox");
    const chatboxBody = document.getElementById('chatboxBody');
    
    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
        const existingPopup = document.querySelector('.notification-popup');
        if (existingPopup) {
            existingPopup.remove();
            isPopupActive = false;
        }
        const currentOptions = chatboxBody.querySelector('.user-options');
        if (currentOptions) currentOptions.remove();
        chatboxBody.appendChild(createOptionButtons([option1, option2, option3, option4]));
    }
}

function closeHover() {
    const closeButton = document.getElementById("closeChatbot");
    const chatboxHeader = document.getElementById("chatboxHeader");
    if (closeButton && chatboxHeader) {
        closeButton.addEventListener("mouseenter", function () {
            chatboxHeader.style.backgroundColor = "white";
            chatboxHeader.style.color = "black";
        });
        closeButton.addEventListener("mouseleave", function () {
            chatboxHeader.style.backgroundColor = "#007bff";
            chatboxHeader.style.color = "white";
        });
    }
}

function createBotMessage(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble bot';
    bubble.innerHTML = `<span class="bot-name">Kort:</span> ${text}`;
    return bubble;
}

function createUserMessage(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.innerHTML = `<span class="user-name">You:</span> ${text}`;
    return bubble;
}

function createOptionButtons(options) {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'user-options';
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'user-option-btn';
        button.textContent = option;
        button.onclick = () => handleOptionClick(option);
        optionsDiv.appendChild(button);
    });
    
    return optionsDiv;
}

function handleOptionClick(selectedOption) {
    const chatboxBody = document.getElementById('chatboxBody');
    
    chatboxBody.appendChild(createUserMessage(selectedOption));
    
    const currentOptions = chatboxBody.querySelector('.user-options');
    if (currentOptions) currentOptions.remove();
    
    switch(selectedOption) {
        case option1:
            chatboxBody.appendChild(createBotMessage(option1Response));
            chatboxBody.appendChild(createOptionButtons([option1A, option1B, option1C, option1D, returnMain]));
            break;
            
        case option1A:
            chatboxBody.appendChild(createBotMessage(option1AResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option1B:
            chatboxBody.appendChild(createBotMessage(option1BResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option1C:
            chatboxBody.appendChild(createBotMessage(option1CResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option1D:
            chatboxBody.appendChild(createBotMessage(option1DResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option2:
            chatboxBody.appendChild(createBotMessage(option2Response));
            chatboxBody.appendChild(createOptionButtons([option2A, option2B, option2C, option2D, returnMain]));
            break;
            
        case option2A:
            chatboxBody.appendChild(createBotMessage(option2AResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option2B:
            chatboxBody.appendChild(createBotMessage(option2BResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option2C:
            chatboxBody.appendChild(createBotMessage(option2CResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option2D:
            chatboxBody.appendChild(createBotMessage(option2DResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option3:
            chatboxBody.appendChild(createBotMessage(option3Response));
            chatboxBody.appendChild(createOptionButtons([option3A, option3B, option3C, option3D, returnMain]));
            break;
            
        case option3A:
            chatboxBody.appendChild(createBotMessage(option3AResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option3B:
            chatboxBody.appendChild(createBotMessage(option3BResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option3C:
            chatboxBody.appendChild(createBotMessage(option3CResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option3D:
            chatboxBody.appendChild(createBotMessage(option3DResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option4:
            chatboxBody.appendChild(createBotMessage(option4Response));
            chatboxBody.appendChild(createOptionButtons([option4A, option4B, option4C, option4D, returnMain]));
            break;
            
        case option4A:
            chatboxBody.appendChild(createBotMessage(option4AResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option4B:
            chatboxBody.appendChild(createBotMessage(option4BResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option4C:
            chatboxBody.appendChild(createBotMessage(option4CResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case option4D:
            chatboxBody.appendChild(createBotMessage(option4DResponse));
            chatboxBody.appendChild(createOptionButtons([returnMain]));
            break;
            
        case returnMain:
            chatboxBody.appendChild(createBotMessage(returnMainMessage));
            chatboxBody.appendChild(createOptionButtons([option1, option2, option3, option4]));
            break;
    }
    
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

function createPopup() {
    const chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "block" || isPopupActive) {
        return;
    }

    const popup = document.createElement('div');
    popup.className = 'notification-popup';
    popup.innerHTML = `
        <span class="popup-message"><strong>Kort:</strong> How can I help you today?</span>
        <button class="popup-close" aria-label="Close popup">×</button>
    `;
    document.body.appendChild(popup);
    isPopupActive = true;

    const closeBtn = popup.querySelector('.popup-close');
    closeBtn.onclick = () => {
        popup.remove();
        isPopupActive = false;
    };
}

document.addEventListener("DOMContentLoaded", function() {
    closeHover();
    const chatbox = document.getElementById("chatbox");
    if (chatbox.style.display !== "block") {
        setTimeout(createPopup, POPUP_DELAY);
    }
});

