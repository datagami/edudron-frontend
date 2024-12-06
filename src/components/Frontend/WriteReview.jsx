import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Form, Button } from 'react-bootstrap';

const WriteReview = () => {
    const [remarks, setRemarks] = useState('');
    const [courseOverview, setCourseOverview] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = React.useState(2);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-7 mx-auto'>
                    <Form.Group controlId="courseOverview">
                        <Form.Label>Course Curriculum Overview</Form.Label>
                        <Form.Control as="textarea" rows={3} value={courseOverview} onChange={(event) => setCourseOverview(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="remarks">
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control as="textarea" rows={3} value={remarks} onChange={(event) => setRemarks(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>College Review</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={(event) => setDescription(event.target.value)} />
                    </Form.Group>
                    <div className='review_box_'>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                width:130
                            }}
                        >
                            <Typography component="legend">Faculty</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                width:130
                            }}
                        >
                            <Typography component="legend">Placement</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                    </div>
                    <div className='review_box_'>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                width:130
                            }}
                        >
                            <Typography component="legend">Social Life</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                width:130
                            }}
                        >
                            <Typography component="legend">Campus Life</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                    </div>
                    <div className='review_box_'>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                width:130
                            }}
                        >
                            <Typography component="legend">Hostel</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default WriteReview
