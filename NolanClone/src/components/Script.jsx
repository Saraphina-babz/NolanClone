import React, { useState } from 'react';

const Script = ({ setScripts, setScriptMessage }) => {
    const [scriptName, setScriptName] = useState('');
    const [scriptContent, setScriptContent] = useState('');

    const handleScriptCreation = (event) => {
        event.preventDefault();
        const newScript = { name: scriptName, content: scriptContent };
        setScripts((prevScripts) => [...prevScripts, newScript]);
        setScriptMessage('Script created successfully!');
        setScriptName('');
        setScriptContent('');
    };

    return (
        <section id="create-script">
            <h2>Create Script</h2>
            <form onSubmit={handleScriptCreation}>
                <label htmlFor="script-name">Script Name:</label>
                <input
                    type="text"
                    id="script-name"
                    value={scriptName}
                    onChange={(e) => setScriptName(e.target.value)}
                    required
                />
                <label htmlFor="script-content">Script Content:</label>
                <textarea
                    id="script-content"
                    value={scriptContent}
                    onChange={(e) => setScriptContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Create Script</button>
            </form>
        </section>
    );
};

export default Script;
