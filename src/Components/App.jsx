import "./App.scss";
import { Component } from "react";
import React from "react";
import Num from "./CalcTemplate/num";

const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const action = ["+", "-", "/", "*", "^", "√", "%"];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            out: "0",
            firstNum: "",
            secondNum: "",
            sign: "",
        };
    }

    changeOut = (e) => {
        const target = e.target;
        const value = target.value;
        console.log(value);
        if (
            target.className === "output" ||
            target.className === "wrapper" ||
            target.className === "numbers" ||
            target.className === "reset" ||
            target.className === "equal"
        )
            return;

        if (num.includes(value)) {
            if (this.state.secondNum === "" && this.state.sign === "") {
                this.setState({ firstNum: this.state.firstNum + value });
                this.setState((state) => ({
                    out: state.firstNum,
                }));
            } else {
                this.setState({ secondNum: this.state.secondNum + value });
                this.setState((state) => ({
                    out: state.firstNum + state.sign + state.secondNum,
                }));
            }

            console.log(this.state.firstNum);
            console.log(this.state.secondNum);
        }
        if (action.includes(value)) {
            this.setState({ sign: this.state.sign + value });
            this.setState((state) => ({
                out: state.firstNum + state.sign + state.secondNum,
            }));

            console.log(this.state.sign);
        }
    };

    clearNum = () => {
        this.setState({ firstNum: "", secondNum: "", sign: "", out: "0" });
    };

    equalNum = () => {
        let firstNum = parseInt(this.state.firstNum);
        let secondNum = parseInt(this.state.secondNum);
        switch (this.state.sign) {
            case "+":
                this.setState({ out: firstNum + secondNum });
                break;
            case "-":
                this.setState({ out: firstNum - secondNum });
                break;
            case "/":
                this.setState({ out: firstNum / secondNum });
                break;
            case "*":
                this.setState({ out: firstNum * secondNum });
                break;
            case "^":
                this.setState({ out: Math.pow(firstNum, secondNum) });
                break;
            case "%":
                this.setState({ out: firstNum / (100 * secondNum) });
                break;
            case "√":
                this.setState({ out: Math.sqrt(firstNum) });
                break;
            default:
        }
    };

    render() {
        const { out } = this.state;
        const { changeOut, clearNum, equalNum } = this;
        return (
            <div className="wrapper">
                <output className="output">{out} </output>
                <Num
                    onClick={changeOut}
                    clear={clearNum}
                    equal={equalNum}
                ></Num>
            </div>
        );
    }
}
