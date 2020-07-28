const Prices = ({ show, prices }) => {

  const priceObjects = Object.values(prices).map(priceCat => priceCat)
  const priceNames = Object.keys(prices).map(price => `${price}`)

  return (
    <div>
      {
        priceNames.map(name => (
          <List component='div'
            subheader={
              <ListSubheader component='div' id='name-list-subheader'>
                {name}
              </ListSubheader>
            }
          >

          </List>
          <ListItemText>
            {name}
          </ListItemText>
        ))
      }
    </div>
    <List component='div'
      subheader={}
    >


    </List>
  )
}

export default Prices