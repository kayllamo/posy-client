import React from 'react'
import { Link } from 'react-router-dom'

import './Log.css';
import PosyContext from '../../PosyContext';
import config from '../../config';



export default class Log extends React.Component {
  static defaultProps = {
    onDeleteLog: () => {},
  }

  static contextType = PosyContext;

  handleClickDelete = () => {
    const logId = this.props.id


    fetch(`${config.API_ENDPOINT}/logs/${logId}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }
    })
    .then(() => {
      // deletes from context which updates state by removing log
      this.context.deleteLog(logId)
      // sends user back to homepage after delete
      this.props.onDeleteLog(logId)
    })
    .catch(err => {
      console.log({ err })
    })
  }

  render() {
    const { log_name, id } = this.props

    return (
      <div className='Log'>
        <h2 className='Log__name'>
          <Link to={`/logs/${id}`}>
            {log_name}
          </Link>
        </h2>
        <button 
          className='Log__delete' 
          type='button'
          onClick={ this.handleClickDelete }>
          {' '}
          delete
        </button>
      </div>        
    )
  }
}
