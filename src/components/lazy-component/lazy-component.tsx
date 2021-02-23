import React, { Suspense } from 'react';

const LazyComponent = ({ children, fallback }) => {
    return <Suspense fallback={fallback}>{children}</Suspense>;
};

LazyComponent.defaultProps = {
    fallback: 'Loading...',
};

export default LazyComponent;
