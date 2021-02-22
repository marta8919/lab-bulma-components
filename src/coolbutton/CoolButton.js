import React from 'react'

function CoolButton(props){

    let classValue = "button is-small {"
    if(props.isSuccess){
        classValue += 'is-sucess'
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
        <button className={classValue}>{props.label}</button>
    );
};

export default CoolButton