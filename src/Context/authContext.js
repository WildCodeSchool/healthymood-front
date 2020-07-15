import React from 'react';

const authContext = React.createContext({ token: null, connected: null });

export default authContext;
