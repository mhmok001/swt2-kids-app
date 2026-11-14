"use client";
import React, { useState } from "react";
import { Form, Button, Tabs, Tab, InputGroup } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../core/constants/routes";

const LoginPage = () => {
  const [key, setKey] = useState("login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFirstname, setRegisterFirstname] = useState("");
  const [registerLastname, setRegisterName] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    try {
      const response = await fetch("http://localhost:8085/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        setLoginError("");
        router.push("/");
      } else {
        const errorText = await response.text();
        setLoginError(errorText || "Einloggen fehlgeschlagen.");
      }
    } catch (err) {
      setLoginError("Fehler beim Verbinden mit dem Server.");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterMessage("");

    try {
      const response = await fetch("http://localhost:8085/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: registerUsername,
          email: registerEmail,
          password: registerPassword,
          firstname: registerFirstname,
          name: registerLastname,
        }),
      });

      if (response.ok) {
        setRegisterSuccess(true);
        setRegisterMessage("Registrierung erfolgreich. Du kannst dich jetzt einloggen.");
        setKey("login");
      } else {
        const errorText = await response.text();
        setRegisterSuccess(false);
        setRegisterMessage(errorText || "Registrierung fehlgeschlagen.");
      }
    } catch (err) {
      setRegisterSuccess(false);
      setRegisterMessage("Fehler beim Verbinden mit dem Server.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eceff5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 350,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
          padding: 32,
        }}
      >
        <div className="text-center mb-3">
          <img src="https://www.herne.de/media/template/images/stadt_herne_logo_header.svg" alt="Logo" width="200" height="200" className="d-inline-block align-top me-2" />
        </div>

        <Tabs
          id="login-signup-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k || "login")}
          className="mb-3 justify-content-center"
        >

          <Tab eventKey="login" title="Log in">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="loginUsername">
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-person" /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="loginPassword">
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-lock" /></InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              {loginError && (
                <div style={{ color: "red", fontSize: 12, marginBottom: 8 }}>
                  {loginError}
                </div>
              )}

              <Button type="submit" variant="primary" className="w-100 mb-2">
                Log in
              </Button>
            </Form>
          </Tab>


          <Tab eventKey="signup" title="Sign up">
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="registerUsername">
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-person" /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Benutzername"
                    required
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerEmail">
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-envelope" /></InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPassword">
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-lock" /></InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Passwort"
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerFirstname">
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-person-badge" /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Vorname"
                    value={registerFirstname}
                    onChange={(e) => setRegisterFirstname(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerLastname">
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-person-badge-fill" /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Nachname"
                    value={registerLastname}
                    onChange={(e) => setRegisterName(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              {registerMessage && (
                <div
                  style={{
                    color: registerSuccess ? "green" : "red",
                    fontSize: 12,
                    marginBottom: 8,
                  }}
                >
                  {registerMessage}
                </div>
              )}

              <Button type="submit" variant="success" className="w-100">
                Sign Up
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
