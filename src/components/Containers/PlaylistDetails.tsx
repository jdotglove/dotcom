import React from 'react';
import { Container, Card, Col, ListGroup, Row, Button } from 'react-bootstrap';
import SpotifyContext from '../../contexts/SpotifyContext';
import styles from '../../../styles/StatisticsSection.module.css';
import TrackSelector from '../Buttons/TrackSelector';

export default function PlaylistDetails() {
  return (
    <SpotifyContext.Consumer>
      {({ currentSelectedPlaylist, setSelectedTracks }) => (
        <Container>
          {currentSelectedPlaylist && currentSelectedPlaylist.tracks.length && (
            <Row>
              <Col>
                <h3>Selected Playlist Details:</h3>
                <Card style={{ width: '18rem' }}>
                  <Card.Header
                    className={styles['playlist-track-container-header']}
                  >
                    <h5> {currentSelectedPlaylist.name} </h5>
                    <Button>Show Full Playlist Breakdown</Button>
                  </Card.Header>
                  <Card.Body>
                    <ListGroup className={styles['playlist-track-group']}>
                      {currentSelectedPlaylist.tracks.map(({ track }) => (
                        <TrackSelector
                          key={track.id}
                          track={track}
                          setSelectedTracks={setSelectedTracks}
                        />
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      )}
    </SpotifyContext.Consumer>
  );
}
