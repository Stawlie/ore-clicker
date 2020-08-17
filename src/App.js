import React, {useState} from 'react';
import Money from "./components/elements/Money/Money";
import Ore from "./components/elements/Ore/Ore";
import Shop from "./components/elements/Shop/Shop";
import "./styles.scss"

function App() {

    const userData = JSON.parse(localStorage.getItem('user-info')) || [];

    let [moneyAmount, setMoneyAmount] = useState(userData.currentMoneyAmount || 0);
    const [pickaxeLvl, setPickaxeLvl] = useState(userData.currentPickaxeLvl || 1);
    const [mineLvl, setMineLvl] = useState(userData.currentMineLvl || 1);

    let pickaxeCost = 100 * (3**pickaxeLvl);
    let mineCost = 200 * (3**mineLvl);

    let currentMoneyAmount = moneyAmount + pickaxeLvl * (2 ** (mineLvl - 1));
    let currentMineLvl = mineLvl;
    let currentPickaxeLvl = pickaxeLvl;

    function resetStorage() {
        localStorage.setItem('user-info', JSON.stringify({currentMoneyAmount, currentPickaxeLvl, currentMineLvl}))
    }

    function Click(num) {
        setMoneyAmount(moneyAmount + pickaxeLvl * (2 ** (mineLvl - 1) * num))
        currentMoneyAmount = moneyAmount + pickaxeLvl * (2 ** (mineLvl - 1) * num)
        resetStorage()
    }

    function upgradeMine() {
        if (moneyAmount >= mineCost) {
            setMoneyAmount(moneyAmount - mineCost)
            setMineLvl(mineLvl + 1);
            currentMineLvl += 1;
            currentMoneyAmount = moneyAmount - mineCost;
            resetStorage()
        }
    }

    function upgradePickaxe() {
        if (moneyAmount >= pickaxeCost) {
            setMoneyAmount(moneyAmount - pickaxeCost)
            setPickaxeLvl(pickaxeLvl + 1);
            currentPickaxeLvl += 1;
            currentMoneyAmount = moneyAmount - pickaxeCost;
            resetStorage()
        }
    }

    function renderNum(num) {
        let str = num.toString()
        let newStr = ' $'
        let flag = 1
        for (let i = str.length - 1; i >= 0; i--) {
            if (flag !== 3) {
                newStr = str[i] + newStr
                flag++
            } else {
                if (i !== 0) {
                    flag = 1
                    newStr = '.' + str[i] + newStr
                } else {
                    newStr = str[i] + newStr
                }
            }
        }
        return newStr
    }

    return (
        <div className="app-wrapper">
            <div className={'app'}>
                <Money
                    renderNum={renderNum(moneyAmount)}
                />
                <Ore
                    onClick={Click}
                    mineLvl={mineLvl}
                />
                <Shop
                    mineLvl={mineLvl}
                    pickaxeLvl={pickaxeLvl}
                    upgradePickaxe={upgradePickaxe}
                    upgradeMine={upgradeMine}
                    renderPickaxeCost={renderNum(pickaxeCost)}
                    renderMineCost={renderNum(mineCost)}
                />
            </div>
        </div>
    );
    }

export default App;