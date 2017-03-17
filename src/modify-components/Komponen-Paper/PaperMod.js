import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import DividerMod from '../Komponen-Divider/DividerMod.js';
import LinearProgress from 'material-ui/LinearProgress';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';

var Link = require('react-router').Link;
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// temp
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

var Link = require('react-router').Link

const styles = {

    paperWellcome: {
        height: 440,
        // flex: 1, width:'20%', order:4,  flexShrink: 4, margin: 10,
        width: "100%",
        textAlign: 'center'
    },
    divPaper: {
        marginTop: 55,
        marginRight: 60
    },
    divContent: {
        textAlign: 'left',
        // paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 40

    },

    progress: {

        paddingTop: 70,
        paddingLeft: 25,
        paddingRight: 20

    },

    panelDalamJudul: {

        paddingTop: 10
    },

    Badan: {
        textAlign: 'left',
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20
    },

    Stepper: {
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5

    },

    letakTombol: {
        textAlign: "right"
    },

    sizeJudul: {

        fontSize: 21

    }

}

export default class PaperMod extends Component {

    render() {

        const contentStyle = {
            margin: '0 16px'
        };

        return (

            <div style={styles.divPaper}>
                <Paper zDepth={3} style={styles.paperWellcome} className={this.props.letak}>
                    <div style={styles.panelDalamJudul}>
                        <h3 style={styles.sizeJudul}>
                            {this.props.judul}
                        </h3>
                    </div>
                    <DividerMod/>
                    <div style={styles.Badan}>
                        <div>
                            <label>
                                <div>
                                    <div style={this.props.styleBadan}>
                                        {this.props.body}
                                    </div>

                                    <div>
                                        {this.props.Optional}
                                    </div>

                                </div>

                            </label>

                        </div>
                        <br/>

                        <DividerMod/>
                        <br/>
                        <div style={styles.Stepper}>

                            <LinearProgress/>

                        </div>

                    </div>

                    <br/>

                    <br/>

                </Paper>

            </div>

        );

    }

}
