import React, {useState} from "react";
import "./styles.scss"

function Ore(props) {

    let [flag, setFlag] = useState('')
    let [bgName, setBgName] = useState('stone')

    function renderOre() {
        let bgNum = Math.floor(Math.random() * 30 + 5 * (props.mineLvl - 1))
        if (bgNum < 30) {
            setBgName('stone')
        }
        if (bgNum >= 30 && bgNum < 45) {
            setBgName('nether')
        }
        if (bgNum >= 45 && bgNum < 60) {
            setBgName('coal')
        }
        if (bgNum >= 60 && bgNum < 75) {
            setBgName('iron')
        }
        if (bgNum >= 75 && bgNum < 85) {
            setBgName('red-stone')
        }
        if (bgNum >= 85 && bgNum < 92) {
            setBgName('gold')
        }
        if (bgNum >= 92 && bgNum < 97) {
            setBgName('lazuli')
        }
        if (bgNum >= 97 && bgNum < 99) {
            setBgName('diamond')
        }
        if (bgNum === 99) {
            setBgName('emerald')
        }
    }

    function clickHandler() {
        switch (bgName) {
            default:
                props.onClick(1)
                break
            case "nether":
                props.onClick(2)
                break
            case "coal":
                props.onClick(3)
                break
            case "iron":
                props.onClick(4)
                break
            case "red-stone":
                props.onClick(5)
                break
            case "gold":
                props.onClick(6)
                break
            case "lazuli":
                props.onClick(7)
                break
            case "diamond":
                props.onClick(8)
                break
            case "emerald":
                props.onClick(9)
                break
        }
        renderOre()
        setTimeout(() => {
            setFlag('')
        }, 100, setFlag('rotate'))
    }

    return (
        <div onClick={clickHandler} className={`ore ${flag} ${bgName}`}>

        </div>
    )
}

export default Ore