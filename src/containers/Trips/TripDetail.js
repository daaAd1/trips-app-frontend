import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Default/Loader';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledTitle = styled.h1``;

const TripDetail = ({ isLoggedIn, match, history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    loadTrip();
  }, []);

  const loadTrip = async () => {
    try {
      const trip = await API.get('trips', `/trips/${match.params.id}`);
      setTrip(trip);
    } catch (e) {
      console.log({ e });
    }

    setIsLoading(false);
  };

  const saveTrip = (e) => {
    e.preventDefault();
    console.log({ trip });
    return API.put('trips', `/trips/${match.params.id}`, {
      body: trip,
    });
  };

  const deleteTrip = async (e) => {
    e.preventDefault();

    const confirmed = window.confirm('Are you sure you want to delete this note?');

    if (!confirmed) {
      return;
    }

    try {
      await API.del('trips', `/trips/${match.params.id}`);
      history.push('/trips');
    } catch (e) {
      alert(e);
      this.setState({ isDeleting: false });
    }
  };

  const renderTrip = (trip) => {
    if (!trip) {
      return null;
    }

    return (
      <div>
        <input
          type="name"
          value={trip.name}
          onChange={(e) => setTrip({ ...trip, name: e.target.value })}
        />
        <input
          type="note"
          value={trip.note}
          onChange={(e) => setTrip({ ...trip, note: e.target.value })}
        />
        <input
          type="rating"
          value={trip.rating}
          onChange={(e) => setTrip({ ...trip, rating: e.target.value })}
        />
        <input
          type="date_from"
          value={trip.date_from}
          onChange={(e) => setTrip({ ...trip, date_from: e.target.value })}
        />
        <input
          type="date_to"
          value={trip.date_to}
          onChange={(e) => setTrip({ ...trip, date_to: e.target.value })}
        />
        <button onClick={saveTrip}>Save trip</button>
        <button onClick={deleteTrip}>Delete trip</button>
      </div>
    );
  };

  return (
    <Wrapper>
      <StyledTitle>Trip detail</StyledTitle>
      {isLoading ? <Loader /> : renderTrip(trip)}
    </Wrapper>
  );
};

export default TripDetail;
