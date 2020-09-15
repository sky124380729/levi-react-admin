import React, { FC, useState, useEffect, useMemo } from 'react'

const Test: FC<{ render?: any }> = (props) => {
    const { children } = props
    const [state, setState] = useState(0)
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const handleMouseMove = (event: React.MouseEvent) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        })
    }
    return (
        <div style={{ height: '50vh' }} onMouseMove={handleMouseMove}>
            {/* {props.render && props.render(position)} */}
            {/* {props.children && props.children(position)} */}
            {typeof children === 'function' ? children(position) : children}
            <p>state:{state}</p>
            <p>count:{count}</p>
            <p>position: {`x${position.x},y:${position.y}`} </p>
            <button
                onClick={() => {
                    setTimeout(() => {
                        setState(state + 1)
                    }, 1000)
                }}
            >
                state
            </button>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                conut
            </button>
        </div>
    )
}

export default Test
