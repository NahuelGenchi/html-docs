import { AsiDocContainer } from "../index";

import "./Aside.scss";

const Aside = (props) => {
  return(
    <aside className="asideSection" style={props.style}>
      <AsiDocContainer onClick={props.onClick}/>
    </aside>
  );
};

export default Aside;