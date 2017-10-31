import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo from 'COMPONENT/DemoWidget/index.jsx';

const MOUNT_NODE = document.getElementById('main')

render(
    <Demo />,
    MOUNT_NODE
);