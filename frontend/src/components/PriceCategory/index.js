import React from 'react'

const PriceCategory = ({ price, name }) => {
  console.log({ price })
  return (
    <li>
      <div className="card">
        <div className="upper-category">
          <h2>{name}</h2>
          <div className="text-wrapper">
            <div className="text">
              <strong>{price.onetime}€<br />/kerta</strong>
            </div>
          </div>
        </div>

        <div className="lower-category">

          <p>{price.tentime}€<br />/10x-kertaa</p>

          <p>{price.month}€<br />/kuukausi</p>

        </div>
      </div>
    </li>
  )
}

export default PriceCategory
