let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const list = document.getElementById('cartItems');
  list.innerHTML = cart.map(item => `<li>${item.name} - R${item.price}</li>`).join('');
}

document.getElementById('checkoutBtn').onclick = () => {
  alert('Payment integration (PayFast/Yoco) coming soon!');
};

// Simple chatbot placeholder
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
