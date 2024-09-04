import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props.name+"constructor")
        
       
    }
    componentDidMount(){
       // console.log(this.props.name+"componentDidMount");
    }
    render(){
        //console.log(this.props.name+"renders")
        const{empData}=props;
        const {firstName,lastName,email,age,gender,id}=this?.empData;
        
        return (
            <div className="user-card">
            <h2>Name: {firstName} {lastName}</h2>
             <h2>Email :{email}</h2>
            <h2>Age: {age}</h2>
            <h4> Gender :{gender}</h4>
            
           
    
           </div>
        )
    }
}
export default UserClass;