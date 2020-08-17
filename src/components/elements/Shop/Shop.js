import React from "react";
import "./styles.scss"

function Shop(props) {

    function renderMineBtn() {
        if (props.mineLvl < 15) {
            return (
                <button className={'shop-btn mine'} onClick={props.upgradeMine}>
                    Upgrade Mine to {props.mineLvl + 1} lvl.
                    <span>{props.renderMineCost}</span>
                </button>
            )
        } else {
            return (
                <button className={'shop-btn mine'}>
                    Mine
                    <span>Max lvl.</span>
                </button>
            )
        }
    }

    function renderPickaxeBtn() {
        if (props.pickaxeLvl < 15) {
            return (
                <button className={'shop-btn pickaxe'} onClick={props.upgradePickaxe}>
                    Upgrade Pickaxe to {props.pickaxeLvl + 1} lvl.
                    <span>{props.renderPickaxeCost}</span>
                </button>
            )
        } else {
            return (
                <button className={'shop-btn pickaxe'}>
                    Pickaxe
                    <span>Max lvl.</span>
                </button>
            )
        }
    }

    return (
        <div className={'shop-list'}>
            {renderPickaxeBtn()}
            {renderMineBtn()}
        </div>
    )
}

export default Shop