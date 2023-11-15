import {ReactNode} from "react";

interface HateProps {
  hates: ReactNode
}
const GarfieldHates = ({hates}: HateProps) => {
  return (
    <>
      <h1>Things that Garfield Hates</h1>
      <ul>
        {hates}
      </ul>
    </>
  );
};

export default GarfieldHates;