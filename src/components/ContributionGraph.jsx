import { useEffect, useState } from "react";
import { getDates, getMonths } from "../lib/date";
import ContributionCell from "./ContributionCell";
import axios from "axios";

const ContributionGraph = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [contributions, setContributions] = useState({});

  const days = getDates();
  const months = getMonths();
  const API = "https://dpg.gg/test/calendar.json";

  const getContributionsData = async () => {
    try {
      const { data } = await axios.get(API);
      setContributions(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContributionsData();
  }, []);

  return (
    <div className="graph">
      <div className="table-head">
        {months.map((month) => (
          <p className="table-head-text" key={month}>
            {month.format("MMM")}
          </p>
        ))}
      </div>
      <div className="table-body">
        {days.slice(0, 7).map((day, index) => (
          <p className="table-head-text" key={index}>
            {day.format("dd")}
          </p>
        ))}
        {days.map((day, index) => (
          <ContributionCell
            key={index}
            day={day}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;
