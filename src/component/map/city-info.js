import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const {name} = this.props;

    const displayName = name;

    return (
      <div>
        <div>
          <h5>{displayName.name} </h5>|{' '}
          <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
          >
            Wikipedia
          </a>
        </div>
<br/>
        <div><h5>Adresse :</h5> {displayName.address} </div>
        <div><h5>Tel :</h5> {displayName.tel} </div>
        {displayName.fax !== '' ? <div><h5>Fax : </h5>  {displayName.fax}</div> : <div><h5>Fax : </h5>  indisponible</div> }
        
        <img width={240} src={info.image} />
      </div>
    );
  }
}