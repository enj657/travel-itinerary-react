import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return (
            <div>
                <Card
                    key={item.id}
                    item={item}
                />
                <hr className="line"/>
            </div>
        )
    })
    return (
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}