import React, { useState  } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
function ToggleLocation(props) {
    const [alignment, setAlignment] = useState('hn');
    const handleChangeLocation = (event, newAlignment) => {
        if (alignment !== event.target.value) {
            setAlignment(newAlignment);
        }
    };
    return (
        <ToggleButtonGroup
            color='primary'
            value={alignment}
            exclusive
            onChange={handleChangeLocation}
            aria-label="location"
            style={{ width: "18%", height: '48px', marginBottom: '50px' }}
            fullWidth
        >
            <ToggleButton
                value="hn"
                aria-label="hn location"
                fullWidth
                style={{
                    backgroundColor: alignment === 'hn' ? 'black' : 'white',
                    borderRadius: 0,
                    color: alignment !== 'hn' ? 'black' : 'white',
                    borderColor: '#333',
                    fontFamily: 'Roboto Slab'
                }}
            >
                Hà Nội
            </ToggleButton>
            <ToggleButton
                value="hp"
                aria-label="hp location"
                fullWidth
                style={{
                    backgroundColor: alignment === 'hp' ? 'black' : 'white',
                    borderRadius: 0,
                    color: alignment !== 'hp' ? 'black' : 'white',
                    borderColor: '#333',
                    marginLeft: '5px',
                    fontFamily: 'Roboto Slab'
                }}
            >
                Hải Phòng
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleLocation