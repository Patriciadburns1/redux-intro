import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class Clock extends Component{
    render(){
        console.log('clock props:', this.props); 
        return(
            <h1>
                Clock goes here!
            </h1>
        )
    }
}

function mapStateToProps(state){
    return{
        test: 'This is a test'
    }
}

export default connect(mapStateToProps)(Clock); 