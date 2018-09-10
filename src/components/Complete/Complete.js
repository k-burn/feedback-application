import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';

class Complete extends Component {
    constructor (props){
        super(props);
        this.state = {
            
        }
    }

    submitToDatabase = () => { 
        if (window.confirm('Are you sure you wish to submit this feedback?')){
            this.sendFeedbackToDatabase();
        }
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

    returnToStart = () => {
        this.props.history.push('1');
    }

    render(){
        return(
            <div>
                <h1>Complete</h1>
                <button className="complete" onClick ={this.submitToDatabase}>Submit Feedback</button>
                <button className="backToStart" onClick ={this.returnToStart}>Leave New Feedback</button>
            </div> 
        )
    }
}//end Component
const mapReduxStateToProps = (reduxState)=>({
    reduxState
});
export default connect(mapReduxStateToProps)(Complete);