import React, { useState } from 'react';
import { API } from 'aws-amplify';
import styled from 'styled-components';
import Input from '../../components/Default/Input';
import { PrimaryButton } from '../../components/Default/Buttons';
import { Loader } from '../../components/Default/Loader';

const Wrapper = styled.div``;

const LoginButton = styled(PrimaryButton)`
  margin-top: 24px;
`;

const LoggingLoader = styled(Loader)`
  margin-left: 5px;
`;

const NewTrip = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [rating, setRating] = useState(0);

  const validateForm = () => {
    return name.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await createTrip({
        name,
        note,
        date_from: dateFrom,
        date_to: dateTo,
        rating,
      });
      history.push('/');
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  };

  const createTrip = (trip) => {
    return API.post('trips', '/trips', {
      body: trip,
    });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
        />
        <Input
          label="Note"
          type="text"
          onChange={(e) => setNote(e.target.value)}
          value={note}
          name="note"
        />
        <Input
          label="Date from"
          type="text"
          onChange={(e) => setDateFrom(e.target.value)}
          value={dateFrom}
          name="dateFrom"
        />
        <Input
          label="Date to"
          type="text"
          onChange={(e) => setDateTo(e.target.value)}
          value={dateTo}
          name="dateTo"
        />
        <Input
          label="Rating"
          type="text"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          name="rating"
        />
        <LoginButton type="submit" disabled={!validateForm()}>
          {isLoading ? (
            <>
              {'Creating trip ...'}
              <LoggingLoader />
            </>
          ) : (
            <>
              {'Create trip'}
              {/* <LoginIcon src="icons/login_ios.svg" alt="login-icon" /> */}
            </>
          )}
        </LoginButton>
      </form>
    </Wrapper>
  );
};

export default NewTrip;
