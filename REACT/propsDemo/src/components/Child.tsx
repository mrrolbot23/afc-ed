interface ChildProps {
  children: string[]
}

const Child = ({children}: ChildProps) => {

  let results = children.map(el => {
    return <li>{el}</li>
  })

  return (
    <>
      <h3>My children are: </h3>
      {results}
    </>
  );
};

export default Child;