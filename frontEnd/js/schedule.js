const events = [
    {
        title: "Valorant Champions 2026",
        date: "20 August 2026",
        location: "Kuala Lumpur"
    },
    {
        title: "League of Legends Cup",
        date: "28 August 2026",
        location: "Johor Bahru"
    },
    {
        title: "MLBB Championship",
        date: "5 September 2026",
        location: "Penang"
    },
    {
        title: "Counter-Strike 2 Major",
        date: "15 September 2026",
        location: "Selangor"
    },
    {
        title: "Dota 2 Invitational",
        date: "25 September 2026",
        location: "Perak"
    },
    {
        title: "PUBG Mobile Tournament",
        date: "3 October 2026",
        location: "Melaka"
    }
];

const eventContainer = document.getElementById("eventContainer");
const savedEvents = document.getElementById("savedEvents");

function displayEvents() {

    eventContainer.innerHTML = "";

    events.forEach(event => {

        eventContainer.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card bg-dark text-white h-100 shadow">

                    <div class="card-body">

                        <h4>${event.title}</h4>

                        <p><strong>Date:</strong> ${event.date}</p>

                        <p><strong>Location:</strong> ${event.location}</p>

                        <button
                            class="btn btn-success"
                            onclick="saveEvent('${event.title}')">

                            ⭐ Save Event

                        </button>

                    </div>

                </div>

            </div>
        `;

    });

}

displayEvents();

function saveEvent(title) {

    let myEvents = JSON.parse(localStorage.getItem("savedEvents")) || [];

    if (!myEvents.includes(title)) {

        myEvents.push(title);

        localStorage.setItem("savedEvents", JSON.stringify(myEvents));

    }

    showSavedEvents();

}

function showSavedEvents() {

    let myEvents = JSON.parse(localStorage.getItem("savedEvents")) || [];

    savedEvents.innerHTML = "";

    myEvents.forEach(event => {

        savedEvents.innerHTML += `
            <li class="list-group-item">
                ⭐ ${event}
            </li>
        `;

    });

}

showSavedEvents();