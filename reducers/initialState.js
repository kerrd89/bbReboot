function createData(id, address, isSecure, alexaRank, trafficEstimate, bbRank) {
  return { id, address, isSecure, alexaRank, trafficEstimate, bbRank };
}

export default {
  blogs: [
    createData(1, 'stackchief.com', true, 100000, 20, 1),
    createData(2, 'prying.io', false, 6600000, 2, 2)
  ]
};
