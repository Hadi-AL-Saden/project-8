import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from './actions/index'

class Users extends Component {
    constructor(props){
        super(props);
        this.state=
        {deleteButton:true};
        this.handleButton=this.handleButton.bind(this)
    }
    componentDidMount(){
        this.props.getUsers()
        
    }
    handleButton(id){
        // event.preventDefault();
        
        document.getElementById(id).style.display="none";   
    }
    render() {
        const {users} = this.props.users
        console.log(this.props.users)

        
        return (
            <div>
                {users.map(u => 
                     
                        
                         
                         <div className="container">
                            <div className="row">

                        
                         <div class="card text-white bg-warning mb-3" style="max-width: 18rem;" key={u.id} style={{display:this.state.deleteButton?'block':'none'}} id={u.id}>
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">{u.original_title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick={() => this.handleButton(u.id)} className="btn btn-danger">Delete</button> 
  </div>
</div>
</div></div>


                         
                     





                     
                )}
            </div>



        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Users)