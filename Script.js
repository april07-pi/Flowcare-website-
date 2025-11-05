let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
  updatePayfastButton();
}

function displayCart() {
  const list = document.getElementById('cartItems');
  list.innerHTML = cart.map(item => `<li>${item.name} - R${item.price}</li>`).join('');
}

function updatePayfastButton() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const itemNames = cart.map(i => i.name).join(', ');
  const payButton = document.getElementById('payButton');
  
  // Update PayFast form values
  document.getElementById('item_name').value = itemNames || '';
  document.getElementById('amount').value = total.toFixed(2);
  
  // Enable button only if cart is not empty
  payButton.disabled = cart.length === 0;
  payButton.textContent = cart.length > 0 
    ? `Pay R${total.toFixed(2)} with PayFast` 
    : 'Pay with PayFast';
}

// Simple chatbot
function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;
  const messages = document.getElementById('messages');
  messages.innerHTML += `<p><strong>You:</strong> ${text}</p>`;
  let reply = "I'm FlowBot! Stay hydrated and remember self-care 💖";
  if (text.toLowerCase().includes('cramp')) reply = "Try a warm compress and gentle stretches!";
  if (text.toLowerCase().includes('pad')) reply = "Change pads every 4-6 hours to stay fresh.";
  messages.innerHTML += `<p><strong>FlowBot:</strong> ${reply}</p>`;
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
    }
