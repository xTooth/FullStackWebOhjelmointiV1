import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
    return (
        <>
            <td>{props.name}</td>
            <td>{props.value}{props.after}</td>
        </>
    )
}

const Statistics = (props) => {
    const { good, neutral, bad } = props

    const total = good + bad + neutral
    const totPos = good / total * 100
    const avg = (good - bad) / total

    if (total === 0) return (
        <div>
            <p>Ei palautetta</p>
        </div>
    )
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <Statistic name='hyvä' value={good} />
                    </tr>
                    <tr>
                        <Statistic name='neutraali' value={neutral} />
                    </tr>
                    <tr>
                        <Statistic name='huono' value={bad} />
                    </tr>
                    <tr>
                        <Statistic name='yhteensä' value={total} />
                    </tr>
                    <tr>
                        <Statistic name='keskiarvo' value={avg} />
                    </tr>
                    <tr>
                        <Statistic name='positiivista' value={totPos} after='%' />
                    </tr>
                </tbody>
            </table>
        </div>
    )

}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const addGood = () => {
        console.log('called')
        setGood(good + 1)

    }

    const addNeutral = () => {
        setNeutral(neutral + 1)
    }

    const addBad = () => {
        setBad(bad + 1)

    }

    const handler = [addGood, addNeutral, addBad]

    return (
        <div>
            <h1>anna palautetta</h1>
            <Buttons handler={handler}></Buttons>
            <h1>statistiikka</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

const Button = (props) => {
    return (
        <>
            <button onClick={props.handler}>{props.text}</button>
        </>
    )
}

const Buttons = (props) => {
    return (
        <div>
            <Button handler={props.handler[0]} text='hyvä' />
            <Button handler={props.handler[1]} text='neutraali' />
            <Button handler={props.handler[2]} text='huono' />
        </div>
    )
}




ReactDOM.render(<App />,
    document.getElementById('root')
)