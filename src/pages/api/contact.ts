import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validación básica
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Enviar correo
    const { data, error } = await resend.emails.send({
      from: 'noreply@nicolascoria.com',
      to: import.meta.env.EMAIL_TO,
      subject: import.meta.env.EMAIL_SUBJECT,
      html: `
        <h2>Nueva consulta desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Enviado desde el formulario de contacto de nicolascoria.com</small></p>
      `,
    });

    if (error) {
      console.error('Error al enviar email:', error);
      return new Response(
        JSON.stringify({ error: 'Error al enviar el mensaje' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Mensaje enviado correctamente' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error en el servidor:', error);
    return new Response(
      JSON.stringify({ error: 'Error del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
