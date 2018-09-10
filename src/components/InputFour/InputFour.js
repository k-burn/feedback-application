import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';

class InputFour extends Component {
    constructor (props){
        super(props);
        this.state = {
            input4: '',
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleSubmitButtonClick = () => {
        console.log('Next button has been clicked');
        const action = {type: 'ADD_INPUT_4', payload: this.state.input4};
        console.log(action.type, action.payload);
        this.props.dispatch(action);
        this.sendFeedbackToDatabase();
        //this.props.history.push('Complete')
    }

    sendFeedbackToDatabase = () => {
        Axios({
            method: 'POST',
            url: '/api/feedback',
            data: this.props.reduxState
        }).then((response)=>{
            console.log('Input was successfully sent to the databse', response);
            
        }).catch((error)=>{
            console.log('an error has occurred when trying to send feedback to the database', error);
            alert('error in submitting feedback')
        })
    }

    render(){
        return(
            <div>
                <h1>Input Four</h1>
                <h3>Any comments?</h3>
                <textarea name ="input4" className="feeling" type="text" placeholder= "type your comment here" onChange={this.handleChange}
                    cols="40" 
                    rows="5" ></textarea>
                <br/>
                <button className="next" onClick={this.handleSubmitButtonClick}>Submit Feedback</button>
            </div> 
        )
    }
}//end Component
const mapReduxStateToProps = (reduxState)=>({
    reduxState
});
export default connect(mapReduxStateToProps)(InputFour);