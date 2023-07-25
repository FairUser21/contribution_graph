import { getDates, getMonths } from "../lib/date";
import ContributionCell from "./ContributionCell";

const ContributionGraph = () => {
  const days = getDates();
  const months = getMonths();

  console.log(months);
  return (
    <div className="graph">
      <div className="table-head">
        {months.map((month) => (
          <p className="table-head-text" key={month}>
            {month}
          </p>
        ))}
      </div>
      <div className="table-body">
        {days.map((day, index) => (
          // <p key={index}>{day.format("ddd")}</p>
          <ContributionCell key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;
