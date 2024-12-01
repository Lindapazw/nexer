"use server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { contactSchema } from "../_components/contact-form";

export async function sendContactInfo(data: z.infer<typeof contactSchema>) {
  const user = process.env.EMAIL_USER;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const receivers = process.env.EMAIL_RECEIVERS;

  await transporter.sendMail({
    from: user,
    to: receivers,
    subject: `Nuevo mensaje de ${data.name} - Formulario de contacto`,
    html: `
        <body>
            <p>Has recibido un nuevo mensaje a través del formulario de contacto:</p>
            <ul>
                <li><strong>Nombre:</strong> ${data.name}</li>
                ${data.company && `<li><strong>Empresa:</strong> ${data.company}</li>`}
                <li><strong>Email:</strong> ${data.email}</li>
                <li><strong>Mensaje:</strong> ${data.message}</li>
                ${data.phoneNumber && `<li><strong>Teléfono:</strong> ${data.phoneNumber}</li>`}
            </ul>
        </body>
    `,
  });

  try {
    await transporter.sendMail({
      from: user,
      to: data.email,
      subject: "Gracias por contactarnos",
      html: `
            <body>
                <p>Hola ${data.name},</p>
                <p>Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo a la brevedad.</p>
                <p>Saludos,</p>
                <p>El equipo de Nexer</p>
            </body>
        `,
    });
  } catch {}

  transporter.close();
}
