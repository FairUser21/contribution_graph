import { useState } from "react";

const ContributionCell = ({
  day,
  selectedDay,
  setSelectedDay,
  contributions,
}) => {
  const formattedDay = day.format("YYYY-MM-DD");

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setSelectedDay(day);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setSelectedDay(null);
    setIsOpen(false);
  };

  const getBgColor = () => {
    if (contributions[formattedDay] < 10) {
      return "level-2";
    } else if (contributions[formattedDay] < 20) {
      return "level-3";
    } else if (contributions[formattedDay] < 30) {
      return "level-4";
    } else if (contributions[formattedDay] > 30) {
      return "level-5";
    } else {
      return "level-1";
    }
  };

  return (
    <div
      className={`cell ${getBgColor()}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isOpen && (
        <div className="menu-items">
          {contributions[formattedDay] ? (
            <p className="main-text">
              {contributions[formattedDay]} contributions in{" "}
            </p>
          ) : (
            <p className="main-text">No contributions on</p>
          )}
          <p className="secondary-text">{day.format("dddd, MMMM D, YYYY")}</p>
        </div>
      )}
    </div>
  );
};

export default ContributionCell;
