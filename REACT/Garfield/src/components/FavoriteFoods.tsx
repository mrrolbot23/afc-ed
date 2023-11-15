import {ReactNode} from "react";

interface FavoriteProps {
  food: ReactNode;
}
const FavoriteFoods = ({food}: FavoriteProps) => {
  return (
    <>
      <h1>Garfield's Favorite Foods</h1>
      <ul>
        {food}
      </ul>
    </>
  );
};

export default FavoriteFoods;