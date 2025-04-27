import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header inner-container">
        <Link className="header-logo" href="/">
          קונטור הנדסה
        </Link>

        <ul className="header-nav">
          <li>
            <Link href="/contact">
              צור קשר
            </Link>
          </li>
          <li>
            <Link href="/about">
              אודות
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}


