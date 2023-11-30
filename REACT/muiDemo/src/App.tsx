import "./App.css"
import {Button, Stack} from "@mui/material";
const App = () => {
  return (
    <>
      <h1>MUI Demo</h1>
      <Stack direction="row" spacing={2} >
      <Button variant="contained" color="success" >
        Success
      </Button>
      </Stack>
    </>
  );
};

export default App;