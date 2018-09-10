import React, { Component } from 'react'
import { connect } from 'react-redux';

class InputThree extends Component {
    constructor (props){
        super(props);
        this.state = {
            input3: '',
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleNextButtonClick = () => {
        console.log('Next button has been clicked');
        const action = {type: 'ADD_INPUT_3', payload: this.state.input3};
        console.log(action.type, action.payload);
        this.props.dispatch(action);
        this.props.history.push('4');
    }

    render(){
        return(
            <div>
                <h1>InputThree</h1>
                <h3>Did you feel supported this week?</h3>
                <label>Input a number between 1 and 5 </label>
                <input className="feeling" name="input3" type="integer" placeholder= "1-5" onChange={this.handleChange}></input>
                <button className="next" onClick={this.handleNextButtonClick}>Next</button>
            </div> 
        )
    }
}//end Component
const mapReduxStateToProps = (reduxState)=>({
    reduxState
});
export default connect(mapReduxStateToProps)(InputThree);