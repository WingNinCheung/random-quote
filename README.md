# Random Quote Project (Bonus Completed)
This project aims to generate random quotes from an API (http://safetybelt.pythonanywhere.com/quotes/random) in <strong>every five seconds</strong>. While the quote is being retreived, it will show a diagonal screen wipe with a new and random color each time.

Note that there is about 10% of the time this API will fail. I designed a way to handle it. 
I show my custom error message as a quote with my name. That might be the worst quote you have ever seen.


![Screen Shot 2023-09-30 at 5 42 54 PM](https://github.com/WingNinCheung/random-quote/assets/96600317/b7f788b3-17d0-42c5-bb59-3ce37a470ac0)


## Basic Requirement
For the basic reirement for this project, a new quote will be generated after an user clicks on the button instead of being automacially generated. 
To see this, please do the following:

#### Uncomment this code :
- index.html:
```
<button id="generate">Get a quote!</button>
```

#### Comment this code:
- js/main.js:
 
```
try {
  setInterval(() => {
    getQuote();
    changeBackgroundColor();
  }, 5000);
} catch (error) {
  console.error("An error occurred in the interval:", error);
}
  ```
