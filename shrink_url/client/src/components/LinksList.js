import React from 'react'
import { Link } from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">No links so far</p>
  }

  return (
    <>
      <h3>Links</h3>
      <div className="col s12" style={{ paddingTop: '2rem' }}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Original</th>
              <th>Shortened</th>
              <th>Info</th>
              <th>Action</th>
            </tr>
          </thead>


          <tbody>
            {links.map((link, index) => {
              return (
                <tr key={link._id}>
                  <td>{index + 1}</td>
                  <td>{link.from}</td>
                  <td>{link.to}</td>
                  <td>
                    <Link to={`/detail/${link._id}`}> Details</Link>
                  </td>
                  {/* Add delete option */}
                  <td>Delete (TBD)</td>
                </tr>
              )
            }
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}