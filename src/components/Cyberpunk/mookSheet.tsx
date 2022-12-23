import { Box, Grid, IconButton, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'
import './mook.css'

import AddCircleIcon from '@mui/icons-material/AddCircle';

interface MookProps {
    mookName: string;
}

interface MookState {
    additionalWeapons: number[];
    loadedData: {
        mookName: string;
        int: number;
        ref: number;
        dex: number;
        tech: number;
        pres: number;
        vol: number;
        cha: number;
        mouv: number;
        cor: number;
        emp: number;
        hp: number;
        heavilyWounded: number;
        deathSave: number;
        armor: {
            name: string;
            head: string;
            body: string;
        };
        weapons: IWeapon[];
        additionalWeapons: string[];
        skills: string[];
        cyberwareAndSpecials: string[];
    };
}

interface IWeapon {
    name: string;
    damage: string;
}

export default class Mook extends React.Component<MookProps, MookState>{

    constructor(props: MookProps){
        super(props);
        this.state = {
            additionalWeapons: [],
            loadedData: {
                mookName: "",
                int: 0,
                ref: 0,
                dex: 0,
                tech:0,
                pres:0,
                vol: 0,
                cha: 0,
                mouv:0,
                cor: 0,
                emp: 0,
                hp: 0,
                heavilyWounded: 0,
                deathSave: 0,
                armor: {
                    name: "",
                    head: "",
                    body: ""
                },
                weapons: [
                    {
                        name: "",
                        damage: ""
                    },
                    {
                        name: "",
                        damage: ""
                    }
                ],
                additionalWeapons: [],
                skills: [],
                cyberwareAndSpecials: [],
            }
        }
    }

    async componentDidMount() {
        // Load mook from DB if a name was provided
        if (this.props.mookName !== "blank")
        {
          await fetch("/GetCyberpunkMook/"+this.props.mookName)
            .then(res => res.json())
            .then(json => {this.setState({
                loadedData: {
                    mookName: json[0].mookName,
                    int: json[0].stats[0],
                    ref: json[0].stats[1],
                    dex: json[0].stats[2],
                    tech:json[0].stats[3],
                    pres:json[0].stats[4],
                    vol: json[0].stats[5],
                    cha: json[0].stats[6],
                    mouv:json[0].stats[7],
                    cor: json[0].stats[8],
                    emp: json[0].stats[9],
                    hp: json[0].hp,
                    heavilyWounded: json[0].heavilyWounded,
                    deathSave: json[0].deathSave,
                    armor: json[0].armor,
                    weapons: json[0].weapons,
                    additionalWeapons: json[0].additionalWeapons,
                    skills: json[0].skills,
                    cyberwareAndSpecials: json[0].cyberwareAndSpecials,
                }
            }); console.log(json)});
          }
      }

    addNewWeapon = () => {
        this.state.additionalWeapons.push(1);
        this.setState({
            additionalWeapons: this.state.additionalWeapons
        })
        console.log(this.state.additionalWeapons)
    }

    render() {
        return (
            <Box>
                <h2>Fiche de {this.state.loadedData.mookName === "" ? "Mook" : this.state.loadedData.mookName}</h2>
                <Grid container spacing={1} style={{
                    "textAlign": "center",
                    "marginTop": "5%"
                }}>
                    <Grid item md={2} className="mookName">
                    <TextField  sx={{ input: { textAlign: "center", "fontWeight": "bold", "height":"100%" } }} className="inputText" variant="outlined" value={this.state.loadedData.mookName === "" ? "Mook" : this.state.loadedData.mookName} />
                    </Grid>
                    <Grid container md={10} spacing={2} style={{ "marginTop": "0 " }}>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="INT" className="inputText" variant="outlined" onChange={e => { this.setState((prevState) => ({...prevState, int: e.target.value}))}} value={this.state.loadedData.int} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="RÉF" className="inputText" variant="outlined" value={this.state.loadedData.ref} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="DEX" className="inputText" variant="outlined" value={this.state.loadedData.dex} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="TECH" className="inputText" variant="outlined" value={this.state.loadedData.tech} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="PRES" className="inputText" variant="outlined" value={this.state.loadedData.pres} />
                        </Grid>
                        <Grid item md={1} className="mookBody" />
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="VOL" className="inputText" variant="outlined" value={this.state.loadedData.vol} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="CHA" className="inputText" variant="outlined" value={this.state.loadedData.cha} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="MOUV" className="inputText" variant="outlined" value={this.state.loadedData.mouv} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="COR" className="inputText" variant="outlined" value={this.state.loadedData.cor} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="EMP" className="inputText" variant="outlined" value={this.state.loadedData.emp} />
                        </Grid>
                        <Grid item md={1} className="mookBody" />
                        <Grid item md={11} className="mookBody" />

                        <Grid item md={12} className="spacing" />


                        <Grid item md={4} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="Points de Santé" className="inputText" variant="outlined" value={this.state.loadedData.hp} />
                        </Grid>
                        <Grid item md={4} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="Seuil de blessure grave" className="inputText" variant="outlined" value={this.state.loadedData.heavilyWounded} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} label="Sauv.mort" className="inputText" variant="outlined" value={this.state.loadedData.deathSave} />
                        </Grid>
                        <Grid item md={1} className="mookBody" />
                        <Grid item md={11} className="mookBody" />


                        <Grid item md={12} className="spacing" />

                        <Grid item md={12} className="spacing" />

                        <Grid item md={4} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value="Armes" />
                        </Grid>
                        <Grid item md={2} className="mookBody" />
                        <Grid item md={4} className="mookBody">
                            <TextField multiline sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value={"Armure: "+this.state.loadedData.armor.name} />
                        </Grid>
                        <Grid item md={1} className="mookBody" />
                        <Grid item md={2} className="mookBody">
                            <TextField multiline sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value={this.state.loadedData.weapons[0].name} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value={this.state.loadedData.weapons[0].damage} />
                        </Grid>
                        <Grid item md={3} className="mookBody" />
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value="Tête" />
                        </Grid>
                        <Grid item md={1} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value={this.state.loadedData.armor.head} />
                        </Grid>
                        <Grid item md={1} className="mookBody" />
                        <Grid item md={2} className="mookBody">
                            <TextField multiline sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value={this.state.loadedData.weapons[1].name} />
                        </Grid>
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value={this.state.loadedData.weapons[1].damage} />
                        </Grid>
                        <Grid item md={3} className="mookBody" />
                        <Grid item md={2} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value="Corps" />
                        </Grid>
                        <Grid item md={1} className="mookBody">
                            <TextField sx={{ input: { textAlign: "center", "fontWeight": "bold" } }} className="inputText" variant="outlined" value={this.state.loadedData.armor.body}  />
                        </Grid>
                        <Grid item md={1} className="mookBody" />
                        {this.state.additionalWeapons.map((m) => {
                            console.log('doing something')
                            return (
                                <>
                                    <Grid item md={2} className='mookBody'>
                                        <TextField sx={{ input: { textAlign: 'center', 'fontWeight': 'bold' } }} className='inputText' variant='outlined' value='Arme'/>
                                    </Grid>
                                    <Grid item md={1} className='mookBody'>
                                        <TextField sx={{ input: { textAlign: 'center', 'fontWeight': 'bold' } }} className='inputText' variant='outlined' value='Dégâts'/>
                                    </Grid>
                                    <Grid item md={8} className='mookBody'/>
                                </>
                            )
                        })}
                        <Grid item md={11} className="mookBody">
                            <IconButton onClick={this.addNewWeapon}>
                                <AddCircleIcon /> Ajouter une arme
                            </IconButton>
                        </Grid>
                        <Grid item md={11} className="mookBody" />


                        <Grid item md={12} className="spacing" />


                        <Grid item md={10} className="mookBody">
                            <TextareaAutosize placeholder="Cyberware & Équipement Spécial" className="inputArea" minRows={3} value={this.state.loadedData.cyberwareAndSpecials[0]} />
                        </Grid>
                        <Grid item md={1} className="mookBody" />

                        <Grid item md={11} className="mookBody" />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}