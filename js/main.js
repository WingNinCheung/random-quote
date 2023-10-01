/**
 * See the README file for more information. API endpoint here for convenience:
 * http://safetybelt.pythonanywhere.com/quotes/random
 */

import { changeBackgroundColor } from "./helper.js";

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.setProperty("--new", "red");
  document.documentElement.style.setProperty("--curr", "lightblue");
  getQuote();
});

function handleCustomError(error) {
  generate(null, error);
}

// Get quote from the API endpoint
async function getQuote() {
  const API_ENDPOINT = "http://safetybelt.pythonanywhere.com/quotes/random";
  try {
    const response = await fetch(API_ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      generate(data);
    } else {
      handleCustomError(response.status);
    }
  } catch (error) {
    handleCustomError(error);
  }
}

// Receive the quote info and display it in the frontend
function generate(data, error) {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  if (data) {
    quote.innerHTML = data.quote;
    author.innerHTML = `- ${data.author}`;
  } else {
    quote.innerHTML = `"Oops It's a ${error} error. Something went wrong. It's not you. It's us. Please try again!"`;
    author.innerHTML = "- Ricky Cheung";
  }
}

// Get a new quote and change bg color when the button is clicked
(function () {
  const button = document.getElementById("generate");
  if (button) {
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      getQuote();
      button.disabled = true;
      await changeBackgroundColor();
      button.disabled = false;
    });
  }
})();
