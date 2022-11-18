import { data } from '../../assets/data';

export const SideBar = () => {
  const { top, mid, bottom } = data.sideBar;

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2>{top.title}</h2>
        <h3>{top.subtitle}</h3>
        <p>{top.text}</p>
      </div>
      <div className="sidebar-mid">
        <h3>{mid.title}</h3>
        <p>{mid.text}</p>
      </div>
      <div className="sidebar-bottom">
        <h3>{bottom.title}</h3>
        <p>{bottom.text}</p>
      </div>
    </aside>
  );
};
