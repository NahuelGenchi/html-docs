import { Link } from "react-router-dom";
import { htmlData } from "../../html_api";

import "./AsiDocContainer.scss";

const AsiDocContainer = () => {
  return (
    <>
      <Link to={`/${htmlData.title}`}>
        <div className="asicont">
          <ion-icon name="logo-html5"></ion-icon>
          <span className="asi-title">{htmlData.title.toUpperCase()}</span>
        </div>
      </Link>
      {htmlData.subItems.map((subitem, key) => {
        return (
          <div className="asicontItem" key={key}>
            <span className="asi-title">{subitem.title.charAt(0).toUpperCase() + subitem.title.slice(1)}</span>
            {subitem.content.map((param, key2) => {
              return (
                <Link to={`/html/${subitem.title}/${param.tag}`} key={key2} className="asicontSubItem">{param.tag}</Link>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default AsiDocContainer;