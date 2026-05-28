function UncontrolledFormSample() {
    function handleFormData(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        alert(data.get("name"));
        alert(data.get("password"));
    }
    return (
        <>
        <form onSubmit={handleFormData}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name"></input>
                </label>
            </div>
                        <div>
                <label>
                    Password:
                    <input type="password" name="password"></input>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default UncontrolledFormSample