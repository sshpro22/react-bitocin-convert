# Bitcoin Conversion

## Installation and Running

Use the package manager npm.
```bash
npm install
npm start
```
## Structure

Used the react wizard form.
Divided into 3 steps.

1. Input user name. 
```bash
  Used localstorage.  
```
2. Select Currency
```bash
  List the currencies from 3rd party API (https://apiv2.bitcoinaverage.com/).
  Available to search and scroll.
```
3. Present Conversion Result
```bash
  Show how much 1 BTC is converted into the chosen currency.
  Able to navigate back to second screen.
  (Not only when click the button but also after reopen minimized window.)
```
