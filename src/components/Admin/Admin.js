import React, { Component } from 'react';
import FeedbackRow from './FeedbackRow/FeedbackRow.js';
import axios from 'axios';
import './Admin.css'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: [],
        }
    }
    // run initial data requests here
    componentDidMount(){
        this.getFeedback();
    }

    // get orders feedback the database
    getFeedback = () => {
        axios({
            method: 'GET',
            url:'/api/feedback',
        }).then((response)=>{
            console.log(response.data);
            this.setState({
                feedback: response.data,
            })
        }).catch((error)=>{
                console.log(error, 'Issue getting feedback');
                alert('Feedback could\'t be obtained');
        })
    }

    deleteFeedback = (id) => {
        console.log('in delete feedback');
        axios({
            method: 'DELETE',
            url:'/api/feedback/' + id,
        }).then((response)=>{
            console.log(response.data);
            this.getFeedback();
        }).catch((error)=>{
                console.log(error, 'Issue deleting feedback');
                alert('Feedback could\'t be deleted');
        })
    }

    render(){
        return(
            <div>
                <h3>Feedback History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.state.feedback.map((feedback, i)=>{
                                return(
                                    <FeedbackRow key= {i} feedback={feedback}
                                                deleteFeedback={this.deleteFeedback} />
                                );
                            })}
                        </tbody>
                </table>
            
            </div>
        )
    }
}
export default Admin; 