import React from "react"
import { Link } from "gatsby"
import NavBar from "./NavBar"
import { useSiteMetadata } from '../hooks/'

const Header = () => {
  const { siteTitle, tagline } = useSiteMetadata()

  return (
    <header className="bg-blue-500">
      <div className="mx-auto container-sm p-4 flex flex-col justify-center place-content-center items-center">
        <div className="flex flex-col justify-center items-center">
          <strong className="mb-0">
            <Link
              to="/"
              className="font-bold text-white text-2xl">
              {siteTitle}
            </Link>
          </strong>
          <small className="text-blue-900 text-sm font-semibold uppercase mt-2">{tagline}</small>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
