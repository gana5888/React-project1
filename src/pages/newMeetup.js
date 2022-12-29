import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../meetups/NewMeetupForm';


function NewMeetup() {
    const history = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'http://localhost:2500/meetup',
            {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then(() => {
          history('/');
        });
        console.log('mmeetupData',meetupData);
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>);
}

export default NewMeetup;