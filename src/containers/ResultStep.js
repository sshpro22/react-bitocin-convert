import React from "react"
import { Button } from 'react-bootstrap'

// This is step 3(result step) in the wizard form
// Calc the rate from the selected data and show the result

const ResultStep = ({ selectedOption, onBack, rates }) => {

    // Get and calc how much 1 BTC is in the selected currency
    const selectedRate = rates[selectedOption];
    const bitcoinRate = rates['BTC'].rate;
    const targetCurrencyRate = selectedRate.rate;
    const targetValue = targetCurrencyRate / bitcoinRate;
    
    // detect the minimize, reopen event and 
    // take person to the second(currency) screen

    document.addEventListener("visibilitychange", handleVisibilityChange, false);
    const handleVisibilityChange = () => {
        if (document.hidden === false) {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            onBack()
        }
    }

    return (
        <div>
            <p>
                1 BTC = <b>{targetValue.toFixed(2)}</b> {selectedOption}
            </p>
            <Button onClick={onBack}>Choose Currency</Button>
        </div>
    )
}

export default ResultStep
