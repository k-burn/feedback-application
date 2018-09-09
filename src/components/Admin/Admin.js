import React, { Component } from 'react';
import FeedbackRow from './FeedbackRow/FeedbackRow.js';
import axios from 'axios';

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
                                    <FeedbackRow key= {i} feedback={feedback}/>
                                );
                            })}
                        </tbody>
                </table>
            
            </div>
        )
    }
}
export default Admin; 