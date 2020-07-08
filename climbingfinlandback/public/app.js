document.addEventListener('DOMContentLoaded', event => {

  const app = firebase.app()
  console.log(app)
})

const googleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    const result = await firebase.auth().signInWithPopup(provider)
    console.log({result})

    const user = result.user
    document.write(`Hello ${user.displayName}`)
    console.log({user})
  
  } catch (e) {
    console.log(e)
  }
}