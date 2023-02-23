import React from 'react';

export const Highlight = ({filter, str}) => {
    if(!filter) return str
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)
    if (matchValue) {
        return str.split(regexp).map((s, index, array) => {
            if (index < array.length - 1) {
                const c = matchValue.shift()
                return <>{s}<span style={{color: 'rgb(255, 82, 83)'}} data-test-id='highlight-matches'>{c}</span></>
            }
            return s
        })
    }
    return str

};

