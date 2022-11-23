import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage} from 'react-intl';


async function detectar() {
  var userLang = navigator.language || navigator.userLanguage;
  if (userLang === "en"){
    return ( await fetch('../locales/en.json').then(response => response.json()) )
  }
  else if (userLang === "es"){
    return ( await  fetch('../locales/es.json').then(response => response.json()) )
  }
  else{
    return ( await  fetch('../locales/es.json').then(response => response.json()) )
  }
}

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
    },
  ]);
  var jsonAUsar = detectar()
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" />
            </th>
            <th scope="col">{jsonAUsar['Company']}</th>
            <th scope="col">{jsonAUsar['Salary']}</th>
            <th scope="col">{jsonAUsar['City']}</th>
            <th scope="col">{jsonAUsar['PublicationDate']}</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
