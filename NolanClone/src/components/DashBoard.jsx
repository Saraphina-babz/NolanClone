import React from 'react';

const DashBoard = ({ scripts }) => {
    return (
        <section id="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard! Here you can manage your scripts.</p>
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
