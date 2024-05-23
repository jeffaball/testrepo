const callback = () => console.log("Out for delivery")
const asyncTask = () =>
    new Promise((resolve) => {
        resolve("It's Coooked!")
    })
    asyncTask().then(callback)
    console.log("Waiting ...")