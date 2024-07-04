import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import Logo from './moomin3.png'
function Navbar() {
  return (
    <div>
          <nav>
           <Image
           src={Logo}
           width={60}
           quality={100}
           alt='Dojo help desk logo'
           placeholder='blur'
           />
          <h1>Dojo helpdesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}

export default Navbar