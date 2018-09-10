import React, { Component } from 'react'
import { connect } from 'react-redux';

class InputTwo extends Component {
    constructor (props){
        super(props);
        this.state = {
            input2: '',
        }
    }


    handleSlide = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleNextButtonClick = () => {
        console.log('Next button has been clicked');
        const action = {type: 'ADD_INPUT_2', payload: this.state.input2};
        console.log(action.type, action.payload);
        this.props.dispatch(action);
        this.props.history.push('3');
    }

    render(){
        return(
            <div>
                <h1>InputTwo</h1>
                <h3>How well did you understand the material from this week?</h3>
                <label>Input a number between 0 and 5 </label>
                <div className="sliderContainer">
                    <input 
                    className= "slider"
                    name="input2"
                    type="range" 
                    min="0" max="5" 
                    onChange={this.handleSlide}
                    step="1"/>
                <p >{this.state.input2}</p>
                </div>
                <button className="next" onClick={this.handleNextButtonClick}>Next</button>
            </div> 
        )
    }
}//end Component
const mapReduxStateToProps = (reduxState)=>({
    reduxState
});
export default connect(mapReduxStateToProps)(InputTwo);