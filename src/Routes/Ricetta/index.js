import React, { useEffect, useState } from 'react'

import Page from '../../components/Page'

import model from '../../model'

export default ({id}) => {

    const [title, setTitle] = useState()
    const [main, setMain] = useState()
    const [secondary, setSecondary] = useState()
    const [doses, setDoses] = useState([])

    useEffect(() => {
        model.getRicetta(id).then(item => {
            setTitle(item.title)
            setMain(item.main)
            setSecondary(item.secondary)
            setDoses(item.doses)
        })
    }, [])

    return (
        <Page title={title}>
            <h1>{main}</h1>
            <h2>{secondary}</h2>
            <ul>
                {
                    doses
                    ? 
                        doses.map(({id, qty, ingredient}) => {
                            return (
                                <li key={id}>
                                    {ingredient.name}: {qty}
                                </li>
                            )
                        })
                    : null
                }
            </ul>
        </Page>
    )
}