import React from 'react'

const PriceCategory = ({ price }) => {
  return (
    <li>
      <div className="card">
        <div className="upper-category">
          <h2>Aikuiset</h2>
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
