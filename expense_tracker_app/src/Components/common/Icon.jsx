import React from 'react';
import { Image } from 'react-native';

const Icon = ({ icon, size }) => {
    return <Image source={icon} style={{ width: size, height: size }} />;
};

export default Icon;