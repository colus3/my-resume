/**
 * Created by colus on 2017. 3. 14..
 */
import React from 'react';
import { Grid as SemanticGrid } from 'semantic-ui-react';
import { Grid as BootstrapGrid, Row as BootstrapRow, Col as BootstrapCol } from 'react-bootstrap';

import { Title } from '../components';

const ContentType2 = (props) => {

  switch( props.resumeUIType ) {
  case 'bootstrap':
    return (
        <div>
          <Title/>
          <BootstrapGrid>
            <BootstrapRow>
              <BootstrapCol xs={12} sm={12} md={4} lg={4}>
                {props.left}
              </BootstrapCol>
              <BootstrapCol xs={12} sm={12} md={8} lg={8}>
                {props.right}
              </BootstrapCol>
            </BootstrapRow>
          </BootstrapGrid>
          <div className="page-break"></div>
          <BootstrapGrid>
            <BootstrapRow>
              <BootstrapCol xs={12} sm={12} md={12} lg={12}>
                {props.bottom}
              </BootstrapCol>
            </BootstrapRow>
          </BootstrapGrid>
        </div>
    );
  case 'semantic-ui':
    return (
        <div>
          <Title/>
          <SemanticGrid container>
            <SemanticGrid.Row columns={2}>
              <SemanticGrid.Column mobile={16} tablet={5} computer={5} color='grey'>
                {props.left}
              </SemanticGrid.Column>
              <SemanticGrid.Column mobile={16} tablet={11} computer={11}>
                {props.right}
              </SemanticGrid.Column>
            </SemanticGrid.Row>
          </SemanticGrid>
          <div className="page-break"></div>
          <SemanticGrid container>
            <SemanticGrid.Row>
              <SemanticGrid.Column>
                {props.bottom}
              </SemanticGrid.Column>
            </SemanticGrid.Row>
          </SemanticGrid>
        </div>
    );
  case 'material-ui':
    return (<div></div>);
  default: return (<div></div>);
  }
};

ContentType2.propTypes = { resumeUIType: React.PropTypes.string, left: React.PropTypes.array, right: React.PropTypes.array, bottom: React.PropTypes.array };
ContentType2.defaultProps = { resumeUIType: '', left: [], right: [], bottom: [] };

export default ContentType2;