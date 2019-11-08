
export const findLog = (logs=[], logId) =>
  logs.find(log => log.id.toString() === logId)

