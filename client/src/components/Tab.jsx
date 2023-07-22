import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';

export const Tab = ({tab, isFilterTab, isActiveTab, handleClick}) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab
  ? {
      backgroundColor: snap.color,
      opacity: 0.5
    }
  : {
      backgroundColor: "transparent",
      opacity: 1
    }

  const tabClassName = isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
  return (
    <div key={tab.name} className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'} `} style={activeStyles}>
      <img src={tab.icon} alt={tab.name} className={tabClassName} />
    </div>
  )
}
export default Tab
