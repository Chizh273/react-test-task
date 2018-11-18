import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Image, List } from 'semantic-ui-react'

import './ImageList.scss'

const ImageList = ({headline, subheadline, list, image}) => (
  <div className="image-list">
    <div className="image-list__header">
      <Header as="h2" size="huge" className="image-list__title">{headline}</Header>
      <span className="image-list__subheadline">{subheadline}</span>
    </div>

    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image src={image}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <List>
            {
              list.map(item => (
                <List.Item key={item}>
                  <List.Icon name="lightbulb outline"/>
                  {item}
                </List.Item>
              ))
            }
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

ImageList.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  image: PropTypes.string.isRequired
}

export default ImageList
