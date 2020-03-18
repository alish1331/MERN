import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>The link</h2>

      <p>Short link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>Original: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Click count: <strong>{link.clicks}</strong></p>
      <p>Date created: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}