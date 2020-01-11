import React from 'react'

import Page from '../../components/Page'

import model from '../../model'

export default ({id}) => {
    const {main, secondary, ingredients} = model.getRicetta(id)
    return (
        <Page>
            <h1>{main}</h1>
            <h2>{secondary}</h2>
            <ul>
                {
                    ingredients
                    ? 
                        Object.entries(ingredients).map(item => {
                            const id = item[0]
                            const ingrediente = model.getIngrediente(id).name
                            const qta = item[1]
                            return (
                                <li key={id}>
                                    {ingrediente}: {qta}
                                </li>
                            )
                        })
                    : null
                }
            </ul>
        </Page>
    )
}