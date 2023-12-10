import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Box className="home-container">
        <Box margin="3em auto" width="80%" textAlign="center">
          <h1>Title Not Found</h1>
          <Link to="/">
            <Button variant="contained" color="warning">Return Home</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;