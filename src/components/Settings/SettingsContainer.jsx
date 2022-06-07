import React from "react";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import Settings from "./Settings";
// import { connect } from "react-redux";

const SettingsContainer = () => {
  return (
    < Settings />
  )

}

export default withAuthNavigate(SettingsContainer);