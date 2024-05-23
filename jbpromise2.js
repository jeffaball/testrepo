const myLoggerCallback = (data) => console.log('I was called back with:',data)

// Toggle this value to pretend the DB call has succeeded or failed
const bakeAPizza = () => false

const orderFoodPromise = () =>
    new Promise((resolve,reject) => {
        // Do some task
        const longTaskOk = bakeAPizza()
        // Which eventually calls either:
        if (longTaskOk) {
            // Call this if we are happy
            resolve("Done! Yummy!")
        } else {
            // Or, if something goes wrong:
            reject("Oops, burnt it")
        }

    })

    console.log("Start now ...")
    // See what happens when the above call fails (rejects)
    orderFoodPromise().then(myLoggerCallback).catch(myLoggerCallback)