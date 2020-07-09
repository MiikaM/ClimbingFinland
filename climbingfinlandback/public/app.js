document.addEventListener('DOMContentLoaded', event => {

  const app = firebase.app()

  const db = firebase.firestore()

  const myPost = db.collection('posts').doc('firstpost')

  myPost.onSnapshot(doc => {

    const data = doc.data()
    document.querySelector('#title').innerHTML = data.title
  })
  console.log({ myPost })

  console.log(app)


})

const uploadFile = async (files) => {
  const storageRef = firebase.storage().ref()
  const horseRef = storageRef.child('Horse.jpg')

  const file = files.item(0)

  const task = horseRef.put(file)

  console.log({ task })
  try {
    const downloadURL = await task.snapshot.ref.getDownloadURL()
    console.log("File available at", downloadURL);
    const url = downloadURL;
    document.querySelector("#imgUpload").setAttribute("src", url);
  } catch (e) {
    console.log({e})
  }


}

const updatePost = (e) => {
  const db = firebase.firestore()
  const myPost = db.collection('posts').doc('firstpost')
  myPost.update({ title: e.target.value })
}