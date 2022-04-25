import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


const EditEventForm = ({ open, handleClose, handleDateChange, handleTextChange, value, onSumbitHandler, textValue, events }) => {


    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Edit Event</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Edit event
                </DialogContentText>
                <div className='flex gap-4 mt-4'>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"

                        label="Event Name"
                        type="text"
                        variant="outlined"
                        required
                        value={textValue}
                        onChange={handleTextChange}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DatePicker
                            label="Add event date"
                            value={value}
                            onChange={handleDateChange}

                            renderInput={(params) => <TextField {...params}
                                required
                                margin='dense'

                            />}
                        />
                    </LocalizationProvider>

                </div>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onSumbitHandler}>Save Changes</Button>
            </DialogActions>
        </Dialog >
    )
}

export default EditEventForm;