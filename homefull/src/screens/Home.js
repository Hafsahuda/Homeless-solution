import React, { Component } from 'react'

let exampleSentence = 'Cram works by preseting text in a new and novel way. Instead of reading across the page, cram displays text centered around the eye. This way you can read up to 3 times faster than your typical reading speed. But not only does Cram display text in an intelligent way, it allows you to interact with it in a new way: through the use of facial controls. Raise your eyebrows to slow the text down; smile to speed it up. Tilt your head to go back or forward. If it notices that you are yawning, it might give you a suggestion to go to bed. Cram is a new way to read and a new way to comprehend.'
console.log(exampleSentence.split(' ').length)

export default class Home extends Component {
    render() {
        return (
            <div style={{ padding: '8vw' }}>
                <div style={styles.row}>
                    <img src={require('../logo.svg')} style={styles.icon} alt="" />
                    <h1 style={styles.title}>Homeful</h1>
                </div>
                <h5 style={styles.white}> Welcome to Homeful </h5>
                {/* <SpeedReader autoSpeedUp autoplay text={exampleSentence}></SpeedReader> */}
                <button className="btn btn-secondary" style={{ marginRight: 50, marginTop: 75, padding: '10px 20px' }}>View Test Documents</button>
                <button className="btn btn-secondary" style={{ padding: '10px 20px', marginTop: 75 }}>Create an Account</button>
            </div>
        )
    }
}

const styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    icon: {
        height: 120,
        width: 'auto'
    },
    title: {
        color: 'white',
        paddingTop: 20,
        marginLeft: 40,
        fontSize: 70
    },
    white: {
        color: 'white',
        marginTop: 40,
        fontSize: 28,
        letterSpacing: 1,
        marginBottom: 100
    }
}
