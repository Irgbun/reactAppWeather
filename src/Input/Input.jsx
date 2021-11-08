import React from "react";

export function Input({value, onChange}) {
    return <input type="text" value={ value } onChange={ onChange } />
}