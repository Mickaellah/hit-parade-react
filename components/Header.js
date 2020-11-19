import React from 'react'

export default function Header() {
    return (
        <header>
            <h1>
                Hit Parade
            </h1>
            <nav className="navigation">
                <ul className="navigation_container">
                    <li className="list_item">Popular songs</li>
                    <li className="list_item">Styles</li>
                    <li className="list_item">Add</li>
                    <li className="list_item">Cart</li>
                </ul>
            </nav>
        </header>
    )
}
