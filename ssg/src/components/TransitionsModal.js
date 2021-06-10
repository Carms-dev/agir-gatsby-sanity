import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles(() => ({
  btnModal: {
    color: `var(--primary-alt)`,
    textDecoration: `underline`,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: `var(--off-white)`,
    border: '2px solid #000',
    padding: `20px`,
    margin: `20px`,
    '& h2': {
      fontSize: `1.75rem`,
      marginBottom: `12px`,
    },
    '& p': {
      marginBottom: `6px`,
    },
    '& ul': {
      listStyle: `inside`,
    },
  },
}));

export default function TransitionsModal({ modalButtonText, modalTitle, modalContentHTML }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.btnModal}>
        {modalButtonText}
      </button>
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
            <h2 id="transition-modal-title">{modalTitle}</h2>
            <div id="transition-modal-description">
              { ReactHtmlParser(modalContentHTML) }
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
