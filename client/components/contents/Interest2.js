/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import _ from 'lodash';
import WordCloud from 'react-d3-cloud';

import { ContentItem } from '../../components';

const createInterests = (interest, i) => {

  const style = { 'display': 'inline-block', 'marginRight': '5px' };
  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  return (
      <span
          key={i}
          className={`label label-${color[parseInt(i / 5) > 4 ? 4 : parseInt(i / 5)]}`}
          style={style}>
        {interest.title}
      </span>
  );
};

const Interest = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem/>);
  }

  const interests = createInterests(props.data.contents);

  const contentItems = [];
  contentItems.push({interests});
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

Interest.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Interest.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Interest;