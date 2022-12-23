import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Mook from "./Cyberpunk/mookSheet";

export default class Cyberpunk extends React.Component {
    render () {
        return (
            <Container>
                <Mook mookName="blank" />
                <Mook mookName="Garde du corps" />
            </Container>
        )
    }
}