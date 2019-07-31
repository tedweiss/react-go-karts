import React, { useState } from 'react'

const Info = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  return (
    <>
      <label>First Name</label>
      <input
        value={firstName}
        onChange={e => {
          setFirstName(e.target.value)
        }}
        type={'text'}
      />
      <label>Last Name</label>
      <input
        value={lastName}
        onChange={e => {
          setLastName(e.target.value)
        }}
        type={'text'}
      />
      <label>Email</label>
      <input
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <label>Date of Birth</label>
      <input
        value={dob}
        onChange={e => {
          setDob(e.target.value)
        }}
        type={'date'}
      />
    </>
  )
}

export default Info
