import "./App.css"
import {Box, Button, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {FormEvent, useState} from "react";


type DefaultValueProps = {
  userName: string,
  password: string,
  age: number
}

const defaultData: DefaultValueProps = {userName: "", password: "", age: 0}
const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues: defaultData})

  const [formData, setFormData] = useState(defaultData)

  const onSubmit: SubmitHandler<DefaultValueProps> = (data) => console.log(data)
  return (
    <>
      <h1>MUI Forms</h1>
      <Box
        component="form"
        sx={{
          color: 'antiquewhite',
          '& .MuiTextField-root': {m: 1, width: '25ch'},
        }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Controller
            name="userName"
            control={control}
            rules={{required: "Username is required"}}
            render={({field}) =>
              <TextField
                {...field}
                error={!!errors.userName}
                helperText={<>{errors.userName?.message}</>}
                id="outlined-required"
                label="Username"
                InputLabelProps={{
                  shrink: true,
                }}
              />}
          />
          <Controller
            name="password"
            control={control}
            rules={{required: "Password is required"}}
            render={({field}) =>
              <TextField
                {...field}
                error={!!errors.password}
                helperText={<>{errors.password?.message}</>}
                id="outlined-password-input"
                label="Password"
                type="password"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            }/>
          <Controller
            name="age"
            control={control}
            rules={{required: "Age is required"}}
            render={({field}) =>
              <TextField
                {...field}
                error={!!errors.age}
                helperText={<>{errors.age?.message}</>}
                id="outlined-password-input"
                label="age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            }/>
        </div>
        <Button type="submit" variant="contained" color="secondary">Submit</Button>
      </Box>

    </>
  );
};

export default App;