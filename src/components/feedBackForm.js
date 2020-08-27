// @flow
import React from 'react';

export const FeedBackForm = ({htmlFor, labelText, children}) => {
    return (
        <div className="form-group">
            <label htmlFor={htmlFor}>{labelText}</label>
            {children}
        </div>
    );
};