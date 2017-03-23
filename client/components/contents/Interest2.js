/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import _ from 'lodash';
import WordCloud from 'react-d3-cloud';

import { ContentItem } from '../../components';

const createInterests = contents => {
  const style = { 'display': 'inline-block', 'marginRight': '5px' };
  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  const data = contents.map((interest, idx) => {
    return {text: interest.title, value: idx};
  });

  return (
      <WordCloud
          data={data}
          fontsizeMapper={word => Math.log2(word.value) * 5}
          rotate={word => word.value % 360}
      />
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