import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Container, Typography } from '@mui/material'
function SelectCard(props) {
    const { dt, label, name, handleChange: onChange } = props;
    const [data, setData] = React.useState(dt[0]);
    const handleChange = (e) => {
        onChange(e)
        setData(e.target.value);
    }
    return (
        <FormControl variant="standard" sx={{ marginRight: 1, width: '100%' }}>
            <Typography fontFamily={'Roboto Slab'} fontWeight={900} id="data">{label}</Typography>
            <Select
                value={data}
                onChange={handleChange}
                name={name}
                sx={{ fontFamily: 'Roboto Slab' }}
            >
                {dt.map((item, index) => (
                    <MenuItem
                        value={item}
                        key={index}
                        sx={{
                            fontFamily: 'Roboto Slab'
                        }}>
                        {item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectCard