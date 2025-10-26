/* eslint-disable @typescript-eslint/no-explicit-any */
export const sendMail = async (clientMessage: {
  name: string;
  email: string;
  phone: number;
  message: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/mail/send-mail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientMessage }),
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
