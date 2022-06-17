import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Alert, TextField } from "@mui/material";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import insta from "../../Assets/insta.png";
import instalogo from "../../Assets/Instagram.jpg";

import bg from '../../Assets/insta.png'
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';

import "./signin.css";
import { CloudUpload } from "@mui/icons-material";
export default function Signin() {
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        text2:{
            textAlign:'center'
        },
        card2:{
            height:'5vh',
            marginTop:'2%'
        }
    })
    const classes = useStyles();
  return (
    <div className="loginWrapper">
      <div
        className="imgcar"
        style={{ backgroundImage:'url('+bg+')',backgroundSize:'cover' }}
      >
        <div className="car">
        <CarouselProvider
                    visibleSlides={1}
                    totalSlides={5}
                    // step={3}
                    naturalSlideWidth={238}
                    naturalSlideHeight={423}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                >
                    <Slider>
                    <Slide index={0}><Image src={img1}/></Slide>
                    <Slide index={1}><Image src={img2}/></Slide>
                    <Slide index={2}><Image src={img3}/></Slide>
                    <Slide index={3}><Image src={img4}/></Slide>
                    <Slide index={4}><Image src={img5}/></Slide>
                    </Slider>
                </CarouselProvider>
        </div>
      </div>
      <div className="loginCard">
        <Card variant="outlined">
          <div className="insta-logo">
            <img src={instalogo} alt="instalogo" />
          </div>
          <CardContent>
            <Typography  className={classes.text1} variant="body2">
              Sign up to see photos and videos from your friends
            </Typography>
            {true && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              size="small"
              margin="dense"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              size="small"
              margin="dense"
            />
            <Typography color="primary" className={classes.text2} variant="caption">
              Forget Password ?
            </Typography>
            <Button
              color="secondary"
              fullWidth={true}
              variant="outlined"
              margin="dense"
              startIcon={<CloudUpload />}
              component="label"
            >
              Upload Profile Image
              <input type="file" accept="image/*" hidden />
            </Button>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              fullWidth={true}
              variant="contained"
            >
              Log in
            </Button>
          </CardActions>
        </Card>
        <Card variant="outlined"  className={classes.card2}>
          <CardContent>
            <Typography  className={classes.text1} variant="caption">
              Don't have an account ?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
