import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Lauches = props => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Fragment>
            <h1 className="display-4 my-3">Lauches</h1>
            <MissionKey />
            <Fragment>
                {data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
            </Fragment>
        </Fragment>
    );
}

export default Lauches;
