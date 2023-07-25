const ContributionWeek = ({ week }) => {
  const showWeek = (n) => {
    console.log(n);
    return n === 0 || n === 2 || n === 4;
  };

  return (
    <>
      {week.map((day, index) =>
        showWeek(index) ? (
          <span className="table-head-text" key={index}>
            {day.format("dd")}
          </span>
        ) : (
          <span key={index}></span>
        )
      )}
    </>
  );
};

export default ContributionWeek;
