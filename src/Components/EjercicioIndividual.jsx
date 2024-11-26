import { useEffect, useState } from "react";
import Monosintapasrse from "../assets/Monosintaparse.png";
import Monotapandoselosojos from "../assets/Monotapandoselosojos.jfif";

const EjercicioIndividual = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#b3e5fc",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          border: "2px solid #90caf9",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
          Ingresar Tu Contraseña
        </h1>
        <img
          src={password.length > 0 ? Monotapandoselosojos : Monosintapasrse}
          alt="Mono"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            overflow: "hidden", 
            border: "4px solid #90caf9", 
            marginBottom: "20px",
          }}
        />
        <div style={{ position: "relative", width: "300px", marginBottom: "20px" }}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Ingresar contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 40px 10px 10px",
            fontSize: "16px",
            border: "1px solid #90caf9",
            borderRadius: "25px",
            boxSizing: "border-box",
            outline: "none",
          }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "20px",
              color: "#888",
              userSelect: "none",
            }}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#64b5f6",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
        onClick={() => alert("¡Iniciaste sesión!")}
      >
        Iniciar Sesión
      </button>
      </div>
    );
  };
  
  export default EjercicioIndividual;