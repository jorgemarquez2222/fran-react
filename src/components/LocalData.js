import React from 'react';

const LocalData = () => {
    const data = [
        {
          name: "Fran",
          edad: 50,
        }, {
          name: "Jorge",
          edad: 33,
        }, {
          name: "Osiris",
          edad: 50,
        }
      ]
    return (
        <ul>
      {data.length &&
        data.map((item, index) => {
          return <li key={index}> {item.name} </li>
        })
      }
    </ul>
    );
    }

    export default LocalData;