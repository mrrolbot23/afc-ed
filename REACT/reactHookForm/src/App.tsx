import "./App.css"
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";

type Inputs = {
  fName: string,
  lName: string,
  age: number
}

const inputDefaultValue: Inputs = {fName: "", lName: "", age: 0}

const App = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({defaultValues: inputDefaultValue})

  const [data, setData] = useState()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue="" {...register("fName")}/>
        <input type="text" defaultValue="" {...register("lName")}/>
        <input type="number" defaultValue="" {...register("age")}/>
      </form>
    </>
  );
};

export default App;