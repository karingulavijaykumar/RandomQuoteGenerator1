let quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only way to do great work is to love what you do.",
    "In the middle of every difficulty lies opportunity.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "The secret of getting ahead is getting started.",
    "If you're going through hell, keep going.",
    "The only person you are destined to become is the person you decide to be."
  ];

  let newQuoteButton=document.getElementById("newquotebutton");
  let quoteText=document.getElementById("newquoteparagraph");

  function getRandomQuote(){
    let randomIndex=Math.ceil(Math.random()*quotes.length);
    return quotes[randomIndex];
  }

  newQuoteButton.addEventListener("click",() => {
          let randomQuote = getRandomQuote();
          quoteText.textContent=randomQuote;
      });
  quoteText.textContent=getRandomQuote();