import Form from "../components/Form";

function Login() {
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
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login;
