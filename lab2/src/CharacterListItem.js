const CharacterListItem = () => {
    return (
        <div className="box">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img
                            src="https://gravatar.com/avatar/62e6ef0bd980dc031d4d5ce83cfe4ddf?s=400&d=robohash&r=x"
                            alt={`Avatar of Mickey Mouse`}
                            className="is-rounded"
                        />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-5">Mickey Mouse</p>
                    <p className="subtitle is-6">mickey@example.com</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterListItem
