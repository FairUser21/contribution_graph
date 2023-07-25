const ContributionLevels = () => {
  return (
    <div className="levels-container">
      <p>Меньше</p>
      <div className="levels">
        {[1, 2, 3, 4, 5].map((level, index) => (
          <div className={`cell level-${level}`} key={index}></div>
        ))}
      </div>
      <p>Больше</p>
    </div>
  );
};

export default ContributionLevels;
