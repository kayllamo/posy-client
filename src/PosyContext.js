import React from 'react'

const PosyContext = React.createContext({
    logs: [],
    toggle: false,
    deleteLog: () => {},
    addLog: () => {},
    toggleErrors: () => {},
    throwError: () => {},
    back: () => {}
})

export default PosyContext