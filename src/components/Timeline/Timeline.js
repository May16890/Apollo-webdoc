import React from 'react';
import { Link } from 'react-router-dom';

const Timeline = () => (
    <div style={{ color: 'black', position: 'fixed', bottom: 10, }}>
        <h3>Timeline</h3>
        <div style={{ width: 600, height: 100, display: 'flex' }}>
            <Link style={{ display: 'block', width: '10%', height: '100%', background: 'blue', }} to='/singlePage/premice'/>
            <Link style={{ display: 'block', width: '10%', height: '100%', background: 'green', }} to='/singlePage/apollo_1'/>
            <Link style={{ display: 'block', width: '10%', height: '100%', background: 'blue', }}  to='/singlePage/apollo_2'/>
            <Link style={{ display: 'block', width: '10%', height: '100%', background: 'green', }} to='/singlePage/apollo_3'/>
            <Link style={{ display: 'block', width: '10%', height: '100%', background: 'blue', }} to='/singlePage/spaceRaceEnded'/>
            <Link style={{ display: 'block', width: '10%', height: '100%', background: 'green', }} to='/singlePage/today'/>
        </div>
    </div>
)

export default Timeline;