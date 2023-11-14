import React from 'react'

function Alert(props) {
  return (
    // props.alert && it means if props.alert null then it won't show alert otherwise it will show alert
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert