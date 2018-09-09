import React, { Component } from 'react'
import { connect } from 'react-redux';

class InputTwo extends Component {
    constructor (props){
        super(props);
        this.state = {
            input2: [],
        }
    }

    handleNextButtonClick = () => {
        console.log('Next button has been clicked');
        const action = {type: 'ADD_FEEDBACK', payload: this.state.input2};
        console.log(action.type, action.payload);
        this.props.dispatch(action);
        this.props.history.push('3')
    }

    render(){
        return(
            <div>
                <h1>InputTwo</h1>
                <h3>How well did you understand the material from this week?</h3>
                <label>Input a number between 1 and 5 </label>
                <input className="feeling" type="integer" placeholder= "1-5"></input>
                <button className="next" onClick={this.handleNextButtonClick}>Next</button>
            </div> 
        )
    }
}//end Component
const mapReduxStateToProps = (reduxState)=>({
    reduxState
});
export default connect(mapReduxStateToProps)(InputTwo);