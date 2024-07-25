import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
 const RadioOptions = React.Children.map(children, (child) => {
   return React.cloneElement(child, {
     onChange,
     checked: child.props.value === selected,
   });
 });
 return <div id="radioButtonContainer">{RadioOptions}</div>;
};
export const RadioOption = ({ value, checked, onChange, children }) => {
 return (
   <>
     <input
       className="radioButton"
       type="radio"
       name={value}
       value={value}
       checked={checked}
       onChange={(e) => {
         onChange(e.target.value);
       }}
     />
     <label className="radioLabel"htmlFor={value}>{children}</label>
   </>
 );
};