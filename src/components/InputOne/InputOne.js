import React, { Component } from 'react'
import { connect } from 'react-redux';

class InputOne extends Component {
    constructor (props){
        super(props);
        this.state = {
            input1: '',
          
        }
    }

    handleSlide = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleNextButtonClick = () => {
        console.log('Next button has been clicked');
        const action = {type: 'ADD_INPUT_1', payload: this.state.input1};
        console.log(action.type, action.payload);
        this.props.dispatch(action);
        console.log(action.type, action.payload);
        this.props.history.push('2');
    }

    render(){
        return(
            <div>
                <h1>InputOne</h1>
                <h3>How are you feeling this week?</h3>
                <label>Input a number between 0 and 5 </label>
                <div className="sliderContainer">
                    <input 
                        name="input1"
                        className= "slider"
                        type="range" 
                        min="0" max="5" 
                        onChange={this.handleSlide}
                        step="1"/>
                    <p >{this.state.input1}</p>
                </div>

                {/* <input className="feeling" name="input1" type="integer" placeholder= "1-5" onChange={this.handleChange} ></input> */}
                <button className="next" onClick={this.handleNextButtonClick}>Next</button>
            </div> 
        )
    }
}//end Component
const mapReduxStateToProps = (reduxState)=>({
    reduxState
});
export default connect(mapReduxStateToProps)(InputOne);