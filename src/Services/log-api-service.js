import TokenService from './token-service';
import config from '../config';

const LogApiService = {
  getLogs() {
    return fetch(`${config.API_ENDPOINT}/logs`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getLog(logId) {
    return fetch(`${config.API_ENDPOINT}/logs/${logId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postLog(log_name, log_entry) {
    return fetch(`${config.API_ENDPOINT}/logs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        log_name,
        log_entry
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  patchLog(logId, log_name, log_entry) {
    return fetch(`${config.API_ENDPOINT}/logs/${logId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        log_name,
        log_entry
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default LogApiService;