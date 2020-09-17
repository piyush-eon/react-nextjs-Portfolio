import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Home.module.css";
import ProjectModal from "./ProjectModal";

const useStyles = makeStyles({
  root: {
    width: 300,
    marginBottom: 20,
    textOverflow: "ellipsis",
  },
  desc: {
    height: 100,
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

export default function ProjectCard({ name, image, description, link }) {
  const classes = useStyles();

  return (
    <Card className={styles.cardsize}>
      <CardActionArea>
        <CardMedia component="img" height="120" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            variant="body2"
            className={styles.carddesc}
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <ProjectModal
          name={name}
          description={description}
          image={image}
          link={link}
        />
      </CardActions>
    </Card>
  );
}
