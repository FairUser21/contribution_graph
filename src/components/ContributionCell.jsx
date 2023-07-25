const ContributionCell = ({ day, selectedDay, setSelectedDay }) => {
  return (
    <div className="level-1 cell" onClick={() => setSelectedDay(day)}></div>
  );
};

export default ContributionCell;
