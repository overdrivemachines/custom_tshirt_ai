import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  // AI Prompt
  const [prompt, setPrompt] = useState("");

  // Loading State. Are we currently generating an image?
  const [generatingImg, setGeneratingImg] = useState(false);

  // Active State
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return <AIPicker />;
      default:
        return null;
    }
  };

  // Update shirt
  // type: logo or full texture
  const handleDecals = (type, result) => {
    // DecalTypes is defined in constants.js. It retuns an object like
    // { stateProperty: "logoDecal", filterTab: "logoShirt" }
    const decalType = DecalTypes[type];
    // updating state.logoDecal or state.fullDecal to the file
    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeEditorTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // After setting the state, we need to update the active tab
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  // Get File data
  // type can be logo or full texture
  const readFile = (type) => {
    // file is from the state
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab(""); // reset active tab
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Tabs on the left */}
          <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation("left")}>
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          {/* Back Button (top right) */}
          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <CustomButton title="Go Back" type="filled" handleClick={() => (state.intro = true)} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
          </motion.div>

          {/* Filter/Toggles (bottom) */}
          <motion.div className="filtertabs-container" {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab key={tab.name} tab={tab} isFilterTab isActiveTab={activeFilterTab[tab.name]} handleClick={() => handleActiveFilterTab(tab.name)}></Tab>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
