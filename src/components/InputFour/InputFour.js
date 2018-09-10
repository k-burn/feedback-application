import React, { Component } from 'react'
import { connect } from 'react-redux';

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


    handleNextButtonClick= () => {
        console.log('Next button has been clicked');
        const action = {type: 'ADD_INPUT_4', payload: this.state.input4};
        console.log(action.type, action.payload);
        this.props.dispatch(action);
        this.props.history.push('Complete');
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
                <button className="next" onClick ={this.handleNextButtonClick}>Next</button>
            </div> 
        )
    }
}//end Component
const mapReduxStateToProps = (reduxState)=>({
    reduxState
});
export default connect(mapReduxStateToProps)(InputFour);