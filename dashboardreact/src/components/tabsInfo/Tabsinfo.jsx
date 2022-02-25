import "./Tabsinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Tabsinfo() {
  return (
    <>
    <div className="tabs">
      <div className="tabsItem">
        <span className="tabsTitle">Revanue</span>
        <div className="tabsMoneyContainer">
          <span className="tabsMoney">$2,415</span>
          <span className="tabsMoneyRate">
            -11.4 <ArrowDownward  className="tabsIcon negative"/>
          </span>
        </div>
        <span className="tabsSub">Compared to last month</span>
      </div>
      <div className="tabsItem">
        <span className="tabsTitle">Sales</span>
        <div className="tabsMoneyContainer">
          <span className="tabsMoney">$4,415</span>
          <span className="tabsMoneyRate">
            -1.4 <ArrowDownward className="tabsIcon negative"/>
          </span>
        </div>
        <span className="tabsSub">Compared to last month</span>
      </div>
      <div className="tabsItem">
        <span className="tabsTitle">Cost</span>
        <div className="tabsMoneyContainer">
          <span className="tabsMoney">$2,225</span>
          <span className="tabsMoneyRate">
            +2.4 <ArrowUpward className="tabsIcon"/>
          </span>
        </div>
        <span className="tabsSub">Compared to last month</span>
      </div>
    </div>
    
    </>
  );
}
