const ContributionWeek = ({ week }) => {
  const showWeek = (n) => {
    return n === 0 || n === 2 || n === 3;
  };

  return (
    <div className="week">
      {week.map((day, index) =>
        showWeek(index) ? (
          <span className="table-head-text" key={index}>
            {day.format("dd")}
          </span>
        ) : null
      )}
    </div>
  );
};

export default ContributionWeek;
