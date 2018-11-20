import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

export const CodeBlock = ({ children, options = {}, style, ...props }) => (
    <div style={{ fontSize: 18, ...style }}>
        <CodeMirror
            value={children}
            options={{
                mode: 'jsx',
                theme: 'night-owl',
                lineNumbers: false,
                readOnly: 'nocursor',
                autoScroll: false,
                ...options
            }}
            {...props}
        />
    </div>
);
