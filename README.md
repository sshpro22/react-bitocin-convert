# Bitcoin Conversion

## Structure && Description

Used the react wizard form.
Divided into 3 steps.

1. UserName Step. 
```bash
  First time, input the username and persists it without using a database(localstorage used).
  So after close and reopen the WebPage, user can navigate directly to the second screen without ask the username again.
```
2. Select Currency
```bash
  List all currencies from 3rd party API (https://apiv2.bitcoinaverage.com/).
  Available to search and scroll.
```
3. Present Conversion Result
```bash
  Show how much 1 BTC is converted into the chosen currency.
  Able to navigate back to second screen.
  (Not only when click the button but also after reopen minimized window.)
```
## Installation and Running

Use the package manager npm.
```bash
npm install
npm start
```


