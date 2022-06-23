import React from "react";
import SelectBox from "react-native-multi-selectbox";

function CustomSelect({ placeholder, options, value, change }) {
  return (
    <SelectBox
      inputPlaceholder={placeholder}
      label=""
      options={options}
      value={value}
      onChange={change}
      hideInputFilter={true}
      width="48%"
      arrowIconColor="gray"
      listOptionProps={{ nestedScrollEnabled: true }}
      containerStyle={{ color: "green" }}
    />
  );
}

export default CustomSelect;
