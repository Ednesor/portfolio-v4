export const prerender = false;

import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST({ request }: { request: Request }) {
    try {
        const { name, email, message, subject } = await request.json();

        const mailgun = new Mailgun(FormData);
        const mg = mailgun.client({
            username: "api",
            key: import.meta.env.PRIVATE_MAILGUN_KEY,
        });

        const data = await mg.messages.create(
            "sandbox2f26f88128f740d295d3b0ced7314a70.mailgun.org",
            {
                from: "Portfolio <postmaster@sandbox2f26f88128f740d295d3b0ced7314a70.mailgun.org>",
                to: ["Edgardo Funes <edgar.funes2001@gmail.com>"],
                subject: `${name} desde el portfolio, asunto: ${subject}`,
                text: `Email: ${email}\n\nMensaje:\n${message}`,
            }
        );

        if(data){
            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Email enviado con éxito",
                }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }else {
            return new Response(
            JSON.stringify({ success: false, error: "Error al enviar email" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: "Error al enviar email" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
