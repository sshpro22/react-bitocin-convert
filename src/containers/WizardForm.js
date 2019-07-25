import React, { Component } from 'react'
import { connect } from "react-redux"

import NameStep from './NameStep'
import CurrencyStep from './CurrencyStep'
import ResultStep from './ResultStep'

import { setName, removeName } from '../actions/user'
import { getRates } from '../actions/api'

import Stepper from 'react-stepper-horizontal'
import styled from 'styled-components'

const SET_NAME_PAGE = 0;
const SET_CURRENCY_PAGE = 1;
const SHOW_RESULT_PAGE = 2;

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainWidget = styled.div`
    box-shadow: 5px 25px 20px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 48px 24px;
    border: 2px solid #b1aeae;
    border-radius: 5px;
    width: 500px;
    height: 450px;
`;

const ContentContainer = styled.div`
    margin-top: 48px;
`;

// This is the main wizard form that manage the total progress of the project.
// Shows each of the steps and pass the parameters via them.

class WizardForm extends Component {

    constructor(props) {
        super(props)
        this.setUserName = this.setUserName.bind(this)
        this.showResult = this.showResult.bind(this)
        this.gotoSetCurrency = this.gotoSetCurrency.bind(this)
        this.gotoSetUserName = this.gotoSetUserName.bind(this)
        this.state = {
            page: this.props.user ? SET_CURRENCY_PAGE : SET_NAME_PAGE,
            selectedOption: null,
        }
    }

    // get rates from 3rd party and save them as state
    componentWillMount() {
        this.props.getRates();
    }

    // set the username and save in localstorage and navigate to currency step
    setUserName = (values) => {
        this.props.setName(values);
        this.setState({ page: SET_CURRENCY_PAGE })
    }

    // show the conversion result of selected currency
    showResult(values) {
        this.setState({
            selectedOption: values.currency,
            page: SHOW_RESULT_PAGE
        })
    }

    // navigate to the set currency step ( for click second step )
    gotoSetCurrency() {
        this.setState({ page: SET_CURRENCY_PAGE })
    }

    // remove the username located in localstorage to create new user
    // then navigate to the set name step
    gotoSetUserName() {
        this.props.removeName();
        this.setState({ page: SET_NAME_PAGE })
    }


    render() {
        const { page } = this.state
        const { user, rates } = this.props;
        return (
            <MainContainer>
                <MainWidget>
                    <Stepper steps={[
                        { title: 'Set Name', onClick: this.gotoSetUserName },
                        { title: 'Set Currency', onClick: this.gotoSetCurrency },
                        { title: 'Show Result' }]} activeStep={page} />
                    <ContentContainer>
                        {page === SET_NAME_PAGE && (<NameStep onSubmit={this.setUserName} />)}
                        {page === SET_CURRENCY_PAGE && (<CurrencyStep user={user} onSubmit={this.showResult} rates={rates} />)}
                        {page === SHOW_RESULT_PAGE && (<ResultStep selectedOption={this.state.selectedOption}
                            onBack={this.gotoSetCurrency} rates={rates.data} />)}
                    </ContentContainer>
                </MainWidget>
            </MainContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.entities.user,
    rates: state.entities.rates,
})

const mapDispatchToProps = {
    setName,
    getRates,
    removeName
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm)