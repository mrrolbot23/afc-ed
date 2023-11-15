// import {ReactNode} from "react";

import {ReactNode} from "react";

interface FavoriteProps {
  results: ReactNode;
}
const Favorites = ({results}: FavoriteProps) => {

  return (
    <>
      <h1>This is an Arabian Horse!</h1>
      <ul>
        {results}
      </ul>
    </>
  );
};

export default Favorites;