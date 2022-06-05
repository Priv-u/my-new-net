// import React from 'react';
import Settings from './Settings';
import { withAuthNavigate } from '../../hoc/WithAuthNavigate';

const SettingsContainer = withAuthNavigate(Settings);

export default SettingsContainer;