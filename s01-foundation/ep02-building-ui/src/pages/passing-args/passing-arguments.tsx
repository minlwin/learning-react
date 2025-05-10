import PageTitle from "../../utils/page-title";

export default function PassingArgs() {
    return (
        <section>
            <PageTitle title="Properties for a Component" />

            <div className="row row-cols-4">
                <div className="col">
                    <Profile user={{name : "Thidar", image : "/profile.jpg", phone : '0911223344', greeting : "Hello! I am a height school student. Nice to meeto you."}} />
                </div>
                <div className="col">
                    <Profile user={{name : "Nilar", image : "/profile1.jpg", phone : '0911223345', greeting : "Hello! I am a college student. Nice to meeto you."}} />
                </div>
                <div className="col">
                    <Profile user={{name : "Jhon Doe", image : "/profile2.jpg", phone : '0911223346', greeting : "Hello! I am a freelance developer. Nice to meeto you."}} />
                </div>
                <div className="col">
                    <Profile user={{name : "David Jone", image : "/profile3.jpg", phone : '0911223347', greeting : "Hello! I am family man. Nice to meeto you."}} />
                </div>
            </div>
        </section>
    )
}

function Profile({user} : {user: {name: string, image : string, phone: string, greeting : string}}) {
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