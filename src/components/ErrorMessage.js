import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function ErrorMessage() {
  return (
    <h3 className="message error-message"><FontAwesomeIcon icon={faExclamationCircle} /> Unable to load a new quote at this time.</h3>
  )
}
