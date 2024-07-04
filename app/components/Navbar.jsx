import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
          <nav>
          <h1>Dojo helpdesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}

export default Navbar