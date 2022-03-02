import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

const NavBar = () => {
    const { nav } = useStaticQuery(graphql`
        query PrimaryNavigationQuery {
  nav: contentJson(id: {eq: "f12b868b-9b11-5f27-aa49-1695ebfe5d55"}) {
    primary {
      displayName
      order
      url
      tooltip
    }
  }
}
    `)

    return (
        <nav className="w-full h-10 mt-3">
            <ul className="list-none flex justify-center items-center h-full">
                { nav.primary.length ? nav.primary
                    .sort((a, b) => b.order - a.order > a.order - b.order)
                    .map(link => link.url.startsWith('/') ? (
                        <li key={link.order} className="inline-flex mx-1">
                            <Link className="block py-1 px-2 text-blue-900 hover:text-white font-light text-lg" activeClassName="text-white" to={link.url} title={link.tooltip}>{link.displayName}</Link>
                        </li>
                    ) : (
                        <li key={link.order} className="inline-flex mx-1">
                            <a className="block py-1 px-2 text-blue-900 hover:text-white font-light text-lg" href={link.url} title={link.tooltip}>{link.displayName}</a>
                        </li>
                    )) : null }
            </ul>
        </nav>
    )
}

export default NavBar