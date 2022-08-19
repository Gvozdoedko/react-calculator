import { Component } from "react";
import React from "react";

export default class Num extends Component {
    render() {
        return (
            <div className="numbers" onClick={this.props.onClick}>
                <button value="1">1</button>
                <button value="2">2</button>
                <button value="3">3</button>
                <button value="+" className="component">
                    +
                </button>

                <button value="4">4</button>
                <button value="5">5</button>
                <button value="6">6</button>
                <button value="-" className="component">
                    -
                </button>

                <button value="7">7</button>
                <button value="8">8</button>
                <button value="9">9</button>
                <button value="/" className="component">
                    /
                </button>

                <button value="0">0</button>
                <button value="^" className="component">
                    ^
                </button>
                <button value="√" className="component">
                    √
                </button>
                <button value="*" className="component">
                    *
                </button>

                <button value="%" className="component">
                    %
                </button>
                <button value="C" className="reset" onClick={this.props.clear}>
                    C
                </button>
                <button value="=" className="equal" onClick={this.props.equal}>
                    =
                </button>
            </div>
        );
    }
}
