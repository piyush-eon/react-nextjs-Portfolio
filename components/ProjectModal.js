import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "../styles/modal.module.css";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     backgroundColor: theme.palette.background.paper,
//     // border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     maxWidth: "80%",
//     maxHeight: "80%",
//   },
//   desc: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "50%",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   item: {
//     marginRight: 20,
//     marginBottom: 25,
//     textAlign: "justify",
//   },
// }));

export default function TransitionsModal({ name, image, description, link }) {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" size="small" color="primary" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <div className={styles.desc}>
              <h2 id="transition-modal-title" className={styles.item}>
                {name}
              </h2>
              <Typography className={styles.item}>{description}</Typography>
              <Button variant="contained" color="primary">
                <a href={link}>OPEN</a>
              </Button>
            </div>
            <img src={image} className={styles.img} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
