# Knock Backend Node Developer Questions
* What's something you have built or done that you are most proud of and why? It doesn't need to be professionally and a short paragraph is fine.

    I am most proud of developing [MyEZTeam.com](https://myezteam.com)  I originally built it using CakePHP back in 2007.  It was how I got my feet wet with MySQL, HTML, CSS, and running code on servers.


* What is a tech problem or area that you are excited about? If you could drop everything and spend your time solving or working in this space what would it be?

    Being so close to the Mayo clinic and having a family member that works there, health care is near the top of the list. Education is also near the top because I have kids in elementary education.  I would like to solve the food that the kids are eating, but that is not a tech problem. If I were to choose one tech problem, it would be ticket sales and distributions.  I feel like consumers are gouged when they have to purchase tickets from specific brokers.

* Why Knock?
      
    Knock is startup with a distributed team.  I have experience working remote and feel I am most productive when working remote.  I believe Knock's business model is solid and I can see the company growing.

* Write a function that takes two strings: `a` and `b` of varying lengths and merges them into a single string, appending any remaining characters to the end and returns it. For example you have two strings `abc` and `stuvwx`. Alternating between the two you should return `asbtcuvwx`.

    [mergeStrings](./mergeStrings.js)

* At Knock we deal with data vendors all across the country. Please write a function that can take varying JSON data input sources representing a property on a MLS (multiple listing service) and send them to our fictional CRM endpoint. You should make an http post call to the CRM endpoint in the function for a customer with the id `762910`. The function should take in one of the MLS JSON input sources at a time. Keep in mind that the data sources will grow with each new city we add so try and think through the implications of this. The CRM endpoint is not real so you will need to mock out the test calls.