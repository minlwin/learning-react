import PageTitle from "../utils/page-title";

export default function ListItems() {

    const list:User[] = [
        {name : "Thidar", image : "/profile.jpg", phone : '0911223344', greeting : "Hello! I am a height school student. Nice to meeto you."},
        {name : "Nilar", image : "/profile1.jpg", phone : '0911223345', greeting : "Hello! I am a college student. Nice to meeto you."},
        {name : "Jhon Doe", image : "/profile2.jpg", phone : '0911223346', greeting : "Hello! I am a freelance developer. Nice to meeto you."},
        {name : "David Jone", image : "/profile3.jpg", phone : '0911223347', greeting : "Hello! I am family man. Nice to meeto you."}
    ]

    return (
        <section>
            <PageTitle title="Rendering List Items" />

            <div className="row row-cols-4">
                {list.map((item, index) => (
                    <div className="col">
                        <Profile user={item} key={`profile-${index}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

type User = {
    name: string
    image: string
    phone: string
    greeting: string
}

function Profile({user} : {user: User}) {
    return (
        <div className="card">
            <img src={user.image} className="card-img-top profile-image" />
            <div className="card-body">
                <h5>{user.name}</h5>

                <div>{user.phone}</div>
                <div>{user.greeting}</div>
            </div>
        </div>
    )
}