document.addEventListener('DOMContentLoaded', event => {

  const app = firebase.app()

  const db = firebase.firestore()

  const myPost = db.collection('posts').doc('firstpost')
  
  myPost.onSnapshot(doc => {

    const data = doc.data()
    document.querySelector('#title').innerHTML = data.title
  })
  console.log({myPost})
  
  console.log(app)


})

const updatePost = (e) => {
  const db = firebase.firestore()
  const myPost = db.collection('posts').doc('firstpost')
  myPost.update({title: e.target.value})
}