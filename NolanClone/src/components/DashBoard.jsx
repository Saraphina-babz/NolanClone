import React from 'react';

const DashBoard = ({ scripts }) => {
    return (
        <section className="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard! manage your scripts here.</p>
            <div id="script-list">
                <h3>Your Scripts</h3>
                <ul>
                    {scripts.map((script, index) => (
                        <li key={index}>
                            {script.name}: {script.content}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default DashBoard;
