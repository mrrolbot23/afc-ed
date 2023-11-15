import Child from "./Child.tsx";

interface ParentTitle {
  title: string;
  parents: string;
}
const Parent = ({title, parents}: ParentTitle) => {
  return (
    <>
      <h1>{title}</h1>
      <p>My parents are: {parents}</p>
      <Child children={["Ryan", "Aria"]}></Child>
    </>
  );
};

export default Parent;