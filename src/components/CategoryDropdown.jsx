"use client"

import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";

export const CategoryDropdown = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  const categories = [{
    value: "Food",
    label: "Food"
  },
  {
    value: "Transport",
    label: "Transport"
  },
  {
    value: "Education",
    label: "Education"
  },
  {
    value: "Health",
    label: "Health"
  },
  {
    value: "Household",
    label: "Household"
  },
  {
    value: "Fashion",
    label: "Fashion"
  },
  {
    value: "Gift",
    label: "Gift"
  }

  ];
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        size="sm"
        label="Categories" 
        className="max-w-xs" 
        onChange={handleChange}
      >
        {categories.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
