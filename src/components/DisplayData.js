function DisplayData({ firstName, lastName, newsetter }) {
    return (
        <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <p>{newsetter ? "Subscribed" : "Not Subscribed"}</p>
        </div>
    )
}

export default DisplayData;