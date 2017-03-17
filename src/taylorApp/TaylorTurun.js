import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';

import Memory from 'material-ui/svg-icons/hardware/memory';
import Rotate from 'material-ui/svg-icons/image/rotate-90-degrees-ccw';
import Build from 'material-ui/svg-icons/action/build'
import Hub from 'material-ui/svg-icons/hardware/device-hub'

import MathJs from 'mathjs'

import './flexboxgrid.css';

const muiTheme = getMuiTheme({palette: {
        // accent1Color: red500
    }});

const style = {
    paperDaftar: {
        height: 520,
        width: 700,
        marginTop: 20,
        display: 'inline-block'
    },
    lebarInput: {

        width: '120%'

    }
}

function isInteger(x) {
    return x % 1 === 0;
}

function checkEmail(email) {
    if (email.match(/"@"/)) {
        return true;
    }
    return false;
}

export default class Taylor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cos: 0,
            hasil: 0,
            message: ''
        }

        this.appHandleSubmit = this
            .appHandleSubmit
            .bind(this);

    }

    appHandleSubmit(message) {
        this.setState({cos: message});
        console.log(this.state.cos)

    }

    render() {

        return (

            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div
                        className={"col-md-10 col-md-offset-3"}
                        style={{
                        paddingRight: 60
                    }}>

                        <Paper zDepth={4} style={style.paperDaftar}>

                            <div
                                style={{
                                textAlign: "center",
                                paddingBottom: 5,
                                paddingTop: 8
                            }}>
                                <ListItem
                                    disabled={true}
                                    rightIcon={< Hub color = {
                                    '#424242'
                                }
                                style = {{marginRight:100, width: 40, height: 40, marginTop:24}}/>}>

                                    <h2>
                                        Penghitungan Nilai Turunan Taylor
                                    </h2>
                                </ListItem>
                            </div>
                            <Divider/>

                            <div
                                className={"col-md-10 "}
                                style={{
                                marginTop: 15
                            }}>

                                <p
                                    style={{
                                    marginLeft: 30,
                                    fontSize: 15,
                                    lineHeight: 1.5
                                }}>
                                    Masukan nilai Turunan dibawah ini, penghitungan dilakukan secara otomatis.

                                </p>
                                <Divider
                                    style={{
                                    marginLeft: 30
                                }}/>
                            </div>

                            <div className={"col-md-15 "}>

                                <div ></div>

                                <div>
                                    <MyForm onChange={this.appHandleSubmit} message={this.state.cos}/>

                                </div>

                            </div>

                            <br/>
                            <br/><br/>
                            <Divider/>
                            <br/>

                            <br/>
                            <div
                                style={{
                                marginLeft: 40
                            }}
                                className={"col-md-10 "}>

                                <LinearProgress/>

                            </div>
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>

        )

    }

}

class MyForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasil: 1,
            degree: 1
        }

        this.handleInputChange = this
            .handleInputChange
            .bind(this);

    }

    handleInputChange(e) {
        e.preventDefault();
        this
            .props
            .onChange(e.target.value);
        console.log(e.target.value);
        var result = MathJs.derivative('x^3 + x', 'x').eval({x:e.target.value})
      

        // console.log(this.state.hasil)
        this.setState({hasil: result})

    }

    toDegrees(angle) {
        return;
    }
    // now always in sync with the parent's state
    render() {
        return (
            <div >
                <form className="reactForm col-md-14 " style={{marginLeft:30}}>

                    <div className={"row"}>

                        <div
                            style={{
                            marginRight: 70
                        }}
                            className={"col-md-4"}>

                            <div
                                style={{
                                marginBottom: -50,
                                marginLeft: 40
                            }}>

                                <h4>
                                    Rumus Awal :

                                </h4>

                            </div>
                            <div
                                style={{
                                marginTop: 40
                            }}>
                                <ListItem
                                    leftIcon={< Memory color = {
                                    '#424242'
                                }
                                style = {{marginLeft:33 , marginTop:28}}/>}
                                    disabled={true}>
                                    <TextField
                                        style={style.lebarInput}
                                        value={"f(x) = x(x^2+1)"}
                                        hintText="Exponent 0"></TextField>
                                </ListItem>
                            </div>
                             <div
                                style={{
                                marginBottom: -50,
                                marginLeft: 40
                            }}>

                                <h4>
                                 Turunan :

                                </h4>

                            </div>
                            <div
                                style={{
                                marginTop: 40
                            }}>
                                <ListItem
                                    leftIcon={< Memory color = {
                                    '#424242'
                                }
                                style = {{marginLeft:33 , marginTop:28}}/>}
                                    disabled={true}>
                                    <TextField
                                        style={style.lebarInput}
                                        value={"f'(x) = (3x^2+1)"}
                                        hintText="Exponent 0"></TextField>
                                </ListItem>
                            </div>
                        </div>
                        <div className={"col-md-14"} style={{marginLeft:-40}}>
                            <div>
                                <div
                                    style={{
                                    marginBottom: -50
                                }}
                                    className={"col-md-offset-1"}>

                                    <h4>
                                        Masukan Nilai Turunan :

                                    </h4>

                                </div>
                                <div style={{}}>
                                    <ListItem
                                        leftIcon={< Memory color = {
                                        '#424242'
                                    }
                                    style = {{marginLeft:33 , marginTop:53}}/>}
                                        disabled={true}>
                                        <TextField
                                            onChange={this.handleInputChange}
                                            style={style.lebarInput}
                                            floatingLabelText="Masukan Nilai x"
                                            hintText="f(0)"
                                            type={"number"}></TextField>
                                    </ListItem>
                                </div>

                                <div
                                    style={{
                                    marginTop: -15
                                }}
                                    className={"col-md-offset-1"}>

                                    <h4>
                                        Hasil penghitungan :

                                    </h4>

                                </div>

                                <div
                                    style={{
                                    marginTop: -15
                                }}>
                                    <ListItem
                                        leftIcon={< Rotate color = {
                                        '#424242'
                                    }
                                    style = {{marginLeft:33 , marginTop:27}}/>}
                                        disabled={true}>
                                        <TextField
                                            style={style.lebarInput}
                                            errorStyle={{
                                            color: 'red'
                                        }}
                                            hintText="Nilai Cos"
                                            defaultValue={0}
                                            value={"Hasil : " + this.state.hasil}></TextField>
                                    </ListItem>
                                </div>
                                <br/>

                                <div
                                    style={{
                                    marginTop: -40
                                }}></div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}