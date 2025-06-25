# 🔐 Password Recovery App - Recuperación de Contraseña con Angular

Este proyecto es una aplicación frontend desarrollada con **Angular** que implementa un flujo completo de **recuperación de contraseña**, ideal para integrarse con APIs de autenticación modernas. Incluye un sistema seguro y amigable para que los usuarios puedan solicitar restablecer su contraseña, ingresar una nueva y ver una confirmación de éxito. 

Se conecta a traves de un backend de springboot

---

## ⚙️ Funcionalidades Principales

- 📧 Solicitud de restablecimiento de contraseña vía email
- 🔑 Ingreso de nueva contraseña desde enlace único
- ✅ Confirmación exitosa del proceso
- 🛠️ Arquitectura modular con servicios reutilizables
- 🌐 Rutas protegidas y navegación controlada

---

## 🧠 Tecnologías Utilizadas

| Tecnología      | Uso                                     |
|-----------------|------------------------------------------|
| Angular 17+     | Framework frontend principal             |
| TypeScript      | Lenguaje principal                       |
| RxJS            | Manejo de programación reactiva          |
| Angular Router  | Navegación entre componentes             |
| Angular Forms   | Validación y control de formularios      |
| SCSS / CSS      | Estilos del frontend                     |
| Angular Services| Comunicación con API REST                |

---

## 🧪 Flujo de Recuperación

1. **Usuario solicita cambio de contraseña**  
   → Se ingresa el email → Se envía token de recuperación

2. **Usuario recibe correo con enlace**  
   → Accede a `/reset-password/:token`

3. **Formulario para nueva contraseña**  
   → Nueva clave validada → Envío al backend

4. **Pantalla de éxito**  
   → Redirección a `/success` tras cambio exitoso

---

## 🔄 Rutas Principales

| Ruta                        | Componente                 | Descripción                            |
|-----------------------------|----------------------------|----------------------------------------|
| `/reset-password/:token`    | `ResetPasswordComponent`   | Formulario para nueva contraseña       |
| `/success`                  | `SuccessComponent`         | Confirmación del restablecimiento      |
| `/`                         | Home o redirección inicial | (opcional)                             |

---


