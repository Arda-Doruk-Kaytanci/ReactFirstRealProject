

let resulttime = []
let resulttable = []
const seededGenerator = (date, hour) => {
  const m = 9;
  const d = date.split("-")[2]
  const result = ((d + hour) % m ) / 10;

  return result;
}

const fetchAPI = (date) => {
  let result = [];

  result.push("--- Select a Time ---")

  for (let hour = 15; hour <= 23; hour++) {
    if(seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
    if(seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
  }

  return result;
};

const gatherAPI = (time, table)=>{
  resulttime.push(time)
  resulttable.push(table)
}
const sentAPI = (name) =>{
  if(name === "time")
     {
      return resulttime
     }
  if(name === "table"){
    return resulttable
  }
}
const deleteAPI = () =>{
  resulttime = []
  resulttable = []
}
const submitAPI = formData => true;

const fakeAPI = {
  sentAPI: sentAPI,
  deleteAPI: deleteAPI,
  gatherAPI: gatherAPI,
  fetchAPI: fetchAPI,
  submitAPI: submitAPI,
}

export default fakeAPI;