import Form from "../components/Form";

function Register() {
    return (
        <div>
            <p>
                Check out the source code on{" "}
                <a
                    href="https://github.com/sruthy16/notes-manager-aggieworks-takehome"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>.
            </p>
            <Form route="/api/user/register/" method="register" />
        </div>
    );
}

export default Register;
