/*
https://www.youtube.com/watch?v=DX9UUr7YKxE&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=20
    Why we need to define EventListener before firing?
    ==================================================
    The concept is quite simple: 
                    emitter objects emit named events that cause
                    previously registered listeners to be called. 
    So, an emitter object basically has two main features:
                    1: Emitting name events.
                    2: Registering and understanding listener functions.
*/

// Events class (Pascal Case)
const EventsEmitter = require ('events') 

// Object of EventsEmitter assigned to variable
const event = new EventsEmitter()

// Event listener (Should before event fire)
// We can call multiple functions with single event
event.on('sayMyName', () => {
    console.log('Your name is Zubair')
})

event.on('sayMyName', () => {
    console.log('Your name is Khalid')
})

// Event fire
event.emit('sayMyName')

// Registering for the event with callback parameters
event.on('checkPage', (sc,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`)
})

event.emit('checkPage',200, 'ok')