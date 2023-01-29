import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'


export const Layout = () => {
	return (
		<>
			<header>
				<CustomLink to="/">
					Home
				</CustomLink>
        <CustomLink to="/about">
					About
				</CustomLink>
				<CustomLink to="/blog">
					Blog
				</CustomLink>
				<CustomLink to="/contact-me">
					Contact
				</CustomLink>
      </header>
			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	)
}
