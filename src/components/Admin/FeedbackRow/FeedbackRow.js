import React, {Component } from 'react';

class FeedbackRow extends Component{

    handleClick = () => {
        this.props.deleteFeedback(this.props.feedback.id);
    }

    render(){
        return(
            <tr>
                <td>
                    {this.props.feedback.feeling}
                </td>
                <td>
                    {this.props.feedback.support}
                </td>
                <td>
                    {this.props.feedback.understanding}
                </td>
                <td>
                    {this.props.feedback.comments}
                </td>
                <td><button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleClick()}}>Delete</button></td>
            </tr>
        )}

}

export default FeedbackRow;