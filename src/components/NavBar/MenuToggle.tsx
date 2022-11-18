import { DataInterface } from '../../assets/data';

interface ToogleProps {
  isToggleMenu: boolean;
  setIsToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataInterface;
}

export const MenuToggle = ({
  isToggleMenu,
  setIsToggleMenu,
  data,
}: ToogleProps) => {
  console.log(isToggleMenu);

  return (
    <button onClick={() => setIsToggleMenu(!isToggleMenu)}>
      {isToggleMenu ? (
        <img src={data.burgerMenuOpen} />
      ) : (
        <img src={data.burgerMenuClose} />
      )}
    </button>
  );
};
