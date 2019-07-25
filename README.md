# Bitcoin Conversion

## Structure && Description

Used the react wizard form.
Divided into 3 steps.

1. UserName Step. 
```bash
  First, once the user inputs the username and then 
  this persists the user name without using a database(localstorage used).
  
  So after close and reopen the WebPage, it takes the user directly to the second screen
  without asking the username again.
```
2. Select Currency
```bash
  List all currencies from 3rd party API (https://apiv2.bitcoinaverage.com/).
  Available to search and scroll.
```
3. Present Conversion Result
```bash
  Shows how much 1 BTC is converted into the chosen currency.
  User is able to navigate back to the second screen.
  (Not only when clicking the button but also after reopening the minimized window.)
```
## Installation and Running

Use the package manager npm.
```bash
npm install
npm start
```


