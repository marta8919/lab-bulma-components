import React, {Component} from 'react'

// class CoolButton extends Component {
//     render(){

//         let myClass = "";

//         if(this.props.isDanger){
//             myClass += 'is-danger'
//         }


//         return (
//             <button className={}> {this.props.children} </button>
//         )
//     }
// }



function CoolButton(props){

    let classValue = "button "
    if(props.isSuccess){
        classValue += 'is-success'
    }
    if(props.isDanger){
        classValue += 'is-danger'
    }
    if(props.isSmall){
        classValue += 'is-small'
    }
    if (props.isPrimary){
        classValue += 'is-primary'
    }
    if(props.className){
        classValue += props.className
    }

    return (
        <button className={classValue}>{props.children}</button>
    );
};

export default CoolButton

