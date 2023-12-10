import {Box, Button} from "@mui/material/";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box className="home-container">
        <Box margin="3em auto" width="80%" textAlign="center">
          <h1>In the mood to catch a flick? See what movies are playing now</h1>
          <Link to="/Now Playing">
            <Button variant="contained" color="secondary">Show a list of Movies</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;