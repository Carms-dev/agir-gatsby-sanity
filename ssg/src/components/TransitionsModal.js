import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import BlockContent from '@sanity/block-content-to-react'

const useStyles = makeStyles(() => ({
  btnModal: {
    color: `var(--primary-alt)`,
    textDecoration: `underline`,
    margin: `0 1rem`,
    textTransform: `unset`,
    padding: `0`,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: `var(--off-white)`,
    border: '2px solid var(--darker)',
    padding: `20px`,
    margin: `20px`,
    borderRadius: `4px`,
    '& h3': {
      fontSize: `1.75rem`,
      marginBottom: `1rem`,
    },
    '& p': {
      marginBottom: `6px`,
    },
    '& ul': {
      listStyle: `inside`,
    },
  },
}));

export default function TransitionsModal({ modalButtonText, modalTitle, modalBlock }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  }

  return (
    <>
      <Button variant="text" onClick={handleOpen} className={classes.btnModal}>
        {modalButtonText}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">{modalTitle}</h3>
            <div id="transition-modal-description">
              <BlockContent blocks={modalBlock} />
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
