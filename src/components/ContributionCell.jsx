const ContributionCell = ({
  day,
  selectedDay,
  setSelectedDay,
  contributions,
}) => {
  const formattedDay = day.format("YYYY-MM-DD");

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
      onClick={() => setSelectedDay(day)}
    ></div>
  );
};

export default ContributionCell;
