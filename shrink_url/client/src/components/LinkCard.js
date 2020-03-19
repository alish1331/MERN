import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <h3>Link Details</h3>
      <div className="col s10" style={{ paddingTop: '2rem' }}>
        <table>
          <tr>
            <th>
              Short link:
            </th>
            <td><a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></td>
          </tr>
          <tr>
            <th>
              Original:
            </th>
            <td><a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></td>
          </tr>
          <tr>
            <th>
              Click count:
            </th>
            <td><strong>{link.clicks}</strong></td>
          </tr>
          <tr>
            <th>
              Date created:
            </th>
            <td><strong>{new Date(link.date).toLocaleDateString()}</strong></td>
          </tr>
        </table>
      </div>
    </>
  )
}