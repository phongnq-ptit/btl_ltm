import React, { memo, useState } from 'react'
import {
    Link, useLocation, useMatch,
    useResolvedPath,
} from 'react-router-dom';

function CustomLink({ to, title }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            to={to}
            style={{
                fontFamily: 'Roboto Slab',
                fontWeight: !match ? 500 : 900,
            }}  >{title}</Link>
    )
}

export default memo(CustomLink)