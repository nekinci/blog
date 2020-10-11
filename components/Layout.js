import React from 'react';

const Layout = ({children}) => {

    return (
        <div className="container mx-auto h-full">
            <div className="flex flex-col justify-center items-center h-screen">
                {children}
            </div>
        </div>
    )
}

export default Layout;