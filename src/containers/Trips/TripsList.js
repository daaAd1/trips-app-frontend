import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Default/Loader';
import { FlexColumn, FlexRow } from '../../components/Default/Flex';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledTitle = styled.h1``;

const TripsListWrapper = styled(FlexColumn)`
  margin-top: 30px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const TripItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-flow: column;
  padding: 16px;

  border-bottom: 1px solid #ccc;

  &:last-child {
    border: 0;
  }
  /* &:nth-child(even) {
    background-color: #ccc;
    border-radius: 8px;
  } */
`;

const TripDestRating = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const TripRating = styled.p`
  margin: 0;
`;

const TripDest = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

const TripDate = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.6;
  text-align: left;
`;

const TripsList = ({ isLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    loadListOfTrips();
  }, []);

  const loadListOfTrips = async () => {
    try {
      const trips = await API.get('trips', '/trips');
      setTrips(trips);
    } catch (e) {
      console.log({ e });
    }

    setIsLoading(false);
  };

  const renderTripsList = (trips) => {
    return (
      <TripsListWrapper>
        {trips &&
          trips.map((trip) => (
            <TripItem to={`/trips/${trip.trip_id}`} key={trip.trip_id}>
              <TripDestRating>
                <TripDest>{trip.name}</TripDest>
                <TripRating>{trip.rating}</TripRating>
              </TripDestRating>
              <TripDate>
                {trip.date_from} - {trip.date_to}
              </TripDate>
            </TripItem>
          ))}
      </TripsListWrapper>
    );
  };

  return (
    <Wrapper>
      <StyledTitle>Your trips</StyledTitle>
      <Link to="/trips/new">New trip</Link>
      {isLoading ? <Loader /> : renderTripsList(trips)}
    </Wrapper>
  );
};

export default TripsList;
