import React, { useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";

const Home = () => {
    const { state, actions, dispatch } = useContext(StoreContext);
    const valueRandom = () => {
        return Math.round(Math.random() * (1000 - 1) + 1);
    };

    return (
        <div>
            <p>{state.generalStates.count}</p>
            <button onClick={() => { actions.generalActions.increment(); }}>
                INCREMENT
            </button>
            <button onClick={() => { actions.generalActions.decrement(); }}>
                DECREMENT
            </button>
            <button onClick={() => { actions.generalActions.reset(); }}>
                RESET
            </button>
            <button onClick={() => { actions.generalActions.setValue(valueRandom()); }}>
                VALUE RANDOM
            </button>
        </div>
    );
};

export default Home;
