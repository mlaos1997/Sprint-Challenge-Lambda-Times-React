import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map(tab => (
          <Tab
            tab={tab}
            key={tab}
            selectedTab={selectedTab}
            selectTabHandler={selectTabHandler}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default Tabs;
