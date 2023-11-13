import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useGetCurrencyQuery } from "../../shared/services/api/currency/currencyApi";
import { FC, useState } from "react";
import { CURRENCY, FONT_FAMILY } from "./const";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const SelectSmall: FC = () => {
  const [currencyName, setCurrencyName] = useState("");

  const { data: currency } = useGetCurrencyQuery();

  const handleChange = (event: SelectChangeEvent) => {
    setCurrencyName(event.target.value);
  };

  return (
    <FormControl sx={{ m: 2, minWidth: 181 }} size="small">
      <InputLabel style={{ fontFamily: FONT_FAMILY }}>{CURRENCY}</InputLabel>
      <Select
        MenuProps={{
          style: {
            maxHeight: 250,
          },
        }}
        value={currencyName}
        label="Currency"
        onChange={handleChange}
      >
        {currency &&
          currency.data.map((item, index) => (
            <MenuItem
              style={{ fontFamily: FONT_FAMILY }}
              key={item.id}
              value={index}
            >
              {item.id}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
