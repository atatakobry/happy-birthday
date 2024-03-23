import React from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children?: React.ReactNode;
  container?: Element;
};

const Portal: React.FC<PortalProps> = ({ children, container = document.body }) =>
  container ? ReactDOM.createPortal(children, container) : null;

export default Portal;
