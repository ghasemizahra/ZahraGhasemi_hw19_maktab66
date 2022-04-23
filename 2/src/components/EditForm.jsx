import React from 'react';
import Typography from '@mui/material/Typography';

const Editform = ({edit}) => {
    if (edit) {
        return (
            <form>
                <label>title</label><br></br>
                <input />
            </form>
        )
    }
    else {
        return (
            <>
                <Typography variant="h3" component="h3">
                    Welcome!
                </Typography>
                <Typography variant="body2" component="h4">
                    Please select an exercise from the list on the left side.
                </Typography>
            </>
            
        )
    }
}

export default Editform;
