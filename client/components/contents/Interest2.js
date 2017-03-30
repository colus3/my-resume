/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import _ from 'lodash';
import { TagCloud } from 'react-tagcloud';

import { ContentItem } from '../../components';

const Interest2 = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem/>);
  }

  const createInterests = contents => {

    return contents.map((interest, idx) => {
      return {value: interest.title, count: (100 - idx * 2)};
    });
  };

  const interests = createInterests(props.data.contents);

  const contentItems = [];
  contentItems.push(
    <TagCloud
      minSize={5}
      maxSize={25}
      tags={interests}
    />
  );
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

Interest2.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Interest2.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Interest2;