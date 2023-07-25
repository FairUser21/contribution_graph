import { useState } from "react";

const ContributionLevels = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const getLevels = (level) => {
    switch (level) {
      case 1:
        return "0 contributions";
      case 2:
        return "1-9 contributions";
      case 3:
        return "10-19 contributions";
      case 4:
        return "20-29 contributions";
      case 5:
        return "30+ contributions";
    }
  };

  return (
    <div className="levels-container">
      <p>Меньше</p>
      <div className="levels">
        {[1, 2, 3, 4, 5].map((level, index) => (
          <div
            className={`cell level-${level}`}
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isOpen && (
              <div className="menu-items">
                <p className="main-text">{getLevels(level)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p>Больше</p>
    </div>
  );
};

export default ContributionLevels;
