import { useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import HabitCounter from "../../Components/Habit Counter";
import FreindListHome from "../../Components/Friend Box Home";

const Habitpage = (props) => {

    return (
        <div className="Background">
            <div className="contents">
                <div className="Navbar">
                    <Navbar/>
                </div>
                <div className="habit-tracker">
                    <div className="habit-counter">
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                        <HabitCounter/>
                    </div>
                </div>
                <div>
                    <FreindListHome/>
                </div>
            </div>
        </div>
    );
}

export default Habitpage;