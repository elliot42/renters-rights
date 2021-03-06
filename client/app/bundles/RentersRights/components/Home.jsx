import React from 'react';
import RentersLayout from './RentersLayout'

export default class Home extends React.Component {
  render() {
    const { } = this.props;

    return (
      <RentersLayout>
        <br/>
        <div className="page-header"> 
          <h1>Helping renters in San José understand the laws and programs in place to protect them.
          </h1>
        </div>
        <br/>
        <div className="home-links">
          <div className="col-sm-12 col-md-7">
            <h4> How can we help you today? </h4>
            <div className="list-group">
              <a href="/resources" className="list-group-item">
                <h4 className="list-group-item-heading">I want to learn about housing programs.</h4>
              </a>
            </div>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">My landlord raised the rent and I cannot afford it anymore.</h4>
              </a>
            </div>
            <div className="list-group">
              <a href="/renters" className="list-group-item">
                <h4 className="list-group-item-heading">My landlord is trying to evict me and I don't know what to do.</h4>
              </a>
            </div>
          </div>
        </div>
      </RentersLayout>      
    )
  }
}
