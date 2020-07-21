
const newPlace = (object) => {
  return {
    name: parseName(object.name),
    description: parseDescription(object.description),
    url: parseUrl(object.url),
    open_hours: parseOpenHours(object.open_hours),
    prices: parsePrices(object.prices),
    picture: parsePicture(object.picture),
    tags: parseTags(object.tags),
    city: parseCity(object.city)
  }
}

const parseName = (name) => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name: ' + name);
  }

  return name;
}

const parseDescription = description => {
  if (!description || !isString(description)) {
    throw new Error('Incorrect or missing text: ' + description);
  }

  return description;
}

const parseUrl = (url) => {
  if (!url || !isUrl(url)) {
    throw new Error('Incorrect or missing url: ' + url);
  }

  return url;
}

const parseOpenHours = (open_hours) => {
  if (!open_hours || !isObject(open_hours)) {
    throw new Error('Incorrect or missing open hours: ' + open_hours);
  }

  
}

export {
  newPlace
}