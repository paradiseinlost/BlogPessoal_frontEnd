import React from "react";
import './ModalPostagem.css';
import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import { Modal, Box } from "@mui/material";
import CadastroPostagem from "../cadastrarPostagem/CadastroPostagem";
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: '#E9967AF5',
            border: '2px solid #692638',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalPostagem() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />

            </Box>

            <CadastroPostagem />

        </div>
    );

    return (
        <div>
            <Button
                variant="outlined"
                className="btnModal"
                onClick={handleOpen}>Nova Postagem</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
export default ModalPostagem;