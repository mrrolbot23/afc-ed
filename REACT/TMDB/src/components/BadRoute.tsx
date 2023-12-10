import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";

const BadRoute = () => {
  return (
    <>
      <Box className="home-container">
        <Box margin="3em auto" width="80%" textAlign="center">
          <img src="./src/assets/badRoute.png" alt=""/>
          <h1>OOPS! PAGE</h1>
          <h1>NOT FOUND</h1>
          <Link to="/">
            <Button variant="contained" color="warning">Return Home</Button>
          </Link>
        </Box>

      </Box>
    </>
  );
};

export default BadRoute;