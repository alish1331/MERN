import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <div className="container">
      <div className="row">
      {/* <h3>Link Details</h3> */}
      <div className="col s12 m12 l12" style={{ paddingTop: '2rem' }}>
        <div className="card white darken-1" style={{ padding: '1rem' }}>
        <table>
          <tr>
            <th>
              Short link:
            </th>
            <td><a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></td>
          </tr>
          <tr>
            <th>
              Original link:
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
        </div>
      </div>
    </div>
  )
}