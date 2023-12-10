import {Card, CardContent, CardMedia, Modal} from "@mui/material";
import {Box, Button, Typography} from "@mui/material/";
import {useState} from "react";
interface MovieProps {
  title: string;
  poster_path: string;
  overview: string;
  voteAverage: number;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: "black" ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MovieCard = ({title,poster_path,overview,voteAverage}:MovieProps) => {
  let posterPath = ``
  if (poster_path === null) {
    posterPath = `./src/assets/no-image.jpeg`
  } else {
    posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`
  }
  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" color="secondary">
            {title}
          </Typography>
          <Typography id="modal-modal-description"  my={2}>
            {overview}
          </Typography>
        </Box>
      </Modal>
      <Card sx={{maxWidth: 345, margin: "1.5em auto 1.5em", height: 630}}>
        <CardMedia
          sx={{height: 440}}
          image={posterPath}
          title="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography align="center" variant="body1" color="secondary">
            Rating: {voteAverage.toFixed(1)}
          </Typography>
          <Button onClick={handleOpen} size="small">Learn More</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;