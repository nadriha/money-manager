"use client"

import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";

export const CategoryDropdown = () => {
  const animals = [{
    value: "animal",
    label: "animal"
  }];
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        size="sm"
        label="Categories" 
        className="max-w-xs" 
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
