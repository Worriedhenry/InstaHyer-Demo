import React from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";

const options = [
  "FullStack Development",
  "Frontend Development",
  "Backend Development",
  "Data Science",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  // Add more options here
];

export default function SearchBar() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleOptionSelect = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  return (
    <Autocomplete
      multiple
      options={options}
      fullWidth
      value={selectedOptions}
      onChange={handleOptionSelect}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          
          fullWidth
          InputProps={{
            ...params.InputProps,
            style: { backgroundColor: "white" },
          }}
          placeholder="Search Skills."
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            label={option}
            {...getTagProps({ index })}
            onDelete={() => {
              const newSelectedOptions = [...selectedOptions];
              newSelectedOptions.splice(index, 1);
              setSelectedOptions(newSelectedOptions);
            }}
          />
        ))
      }
    />
  );
}
