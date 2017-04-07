import React from "react";
import Grid from "../template/grid"
import  IconButton from "../template/iconButton"

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="11 9 10">
            <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa"/>
        </Grid>

        <Grid cols=" 1 1 1">
            <IconButton style="primary" icon="plus"></IconButton>
        </Grid>

    </div>
)