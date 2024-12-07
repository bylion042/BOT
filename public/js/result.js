// Get the searched query
const query = "<%= query %>";

// Update the TradingView iframe with the searched currency pair
const iframe = document.getElementById("tradingViewIframe");
if (query) {
    const formattedPair = query.replace('/', '').toUpperCase();
    iframe.src = `https://www.tradingview.com/widgetembed/?frameElementId=tradingview_d345c&symbol=FX:${formattedPair}&interval=D&hide_top_toolbar=true&hide_side_toolbar=true&theme=dark&style=1`;
}

// Display the bot message when the bot icon is clicked
const botMessageText = document.getElementById("botMessageText");
const botMessage = document.getElementById("botMessage");
const botIcon = document.getElementById("botIcon");
const loadingSpinner = document.getElementById("loadingSpinner");
const loadingText = document.getElementById("loadingSpinner").querySelector("p");

botIcon.addEventListener("click", () => {
    botMessage.style.display = 'block'; // Show the bot message
    loadingSpinner.style.display = 'flex'; // Show loading spinner
    botMessageText.innerHTML = `Will <strong>${query}</strong>, buy or sell?`;

    // Simulate process with delays (slowed down)
    setTimeout(() => {
        loadingText.innerHTML = 'Checking news...';
    }, 3000);

    setTimeout(() => {
        loadingText.innerHTML = 'Marking support zone...';
    }, 6000);

    setTimeout(() => {
        loadingText.innerHTML = 'Marking resistance zone...';
    }, 9000);

    setTimeout(() => {
        loadingText.innerHTML = 'Noting technical analysis...';
    }, 12000);

    setTimeout(() => {
        loadingText.innerHTML = 'Back-testing...';
    }, 15000);

    setTimeout(() => {
        loadingText.innerHTML = 'Checking key levels...';
    }, 18000);

    setTimeout(() => {
        loadingText.innerHTML = 'Rounding up analytics...';
    }, 21000);

    // Final recommendation (slowed down)
    setTimeout(() => {
        const recommendation = Math.random() > 0.5 ? 'BUY' : 'SELL';
        const recommendationColor = recommendation === 'BUY' ? 'green' : 'red';
        loadingText.innerHTML = `<span style="color: ${recommendationColor}; font-size: 24px;">${recommendation} ${query}</span>`;
    }, 24000);
});

// Close button functionality
const closeButton = document.getElementById("closeBotMessage");
closeButton.addEventListener("click", function() {
    botMessage.style.display = 'none'; // Hide the bot message
    loadingSpinner.style.display = 'none'; // Hide loading spinner
});